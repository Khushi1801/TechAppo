//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const multer = require('multer');
var express = require("express");
var cors= require("cors"); 
var app=express();
app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));
const path=require("path");
const nodemailer = require("nodemailer");
const { group } = require('console');

 mongoose.connect('mongodb://localhost:27017/TechAppo')
  .then(()=>{
    console.log("server connected");
}).catch((err)=>{
    console.log(err);
})


//multer -> start
const storage=multer.diskStorage({
  destination:path.join(__dirname,'./public/'),
  filename: function(req, file, callback) {
      callback(null,  Date.now()  + path.extname(file.originalname))
} 
});

var upload1=multer({storage:storage});
var multi=upload1.fields([{name:'rpimage'}]);

//multer -> end

const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()+1}`;
  


const Types = mongoose.Types;
const ObjectId = Types.ObjectId;


//schemas


const register = new mongoose.Schema(
  {
      fname: String,
      lname : String,
      email : String,
      mobile : Number,
      dob : Date,
      pwd : String,
      cpwd : String,
      role : String,
      gender : String,
      img : String,
      enroll_no : Number
  }
);




//(1) DEFINITION
const define = new mongoose.Schema(
    {
        stu_id : Number,
        stu_name : String,
        project_title : String,
        project_definition : String,
        project_description : String,
        techology_used : String,
        entry_date : Date,
        group_id : Number,
        group_type : String,
        company_name : String,
        company_address : String,
        industrial_guide : String,
        offer_letter : String,
        u_project_title : String,
        u_project_definition : String,
        u_project_description : String,
        u_techology_used : String,

    }
);


//(2) FOR SCHEDULING TIME
const schedule = new mongoose.Schema(
  {
    requested_date : Date,
    group_id : Number,
    purpose : String,
    request_date : Date,
    request_time : String,
    schedule_status : Number,
    reply : String    
  }
);


//(3) FOR REPORT SUBMISSION
const report = new mongoose.Schema(
  {
    requested_date : Date,
    group_id : Number,
    week : String,
    report : String,
    rep_ver1 : String,
    rep_ver2 : String,
    rep_ver3 : String
  }
);

//(4) FOR APPEAL
const appeal = new mongoose.Schema(
  {
    requested_date : Date,
    group_id : Number,
    stu_id : Number,
    appeal : String,
    reply : String,
    date_of_reply : Date,
    appeal_status : Number
  }
);

//(5) FOR EXTERNAL
const external = new mongoose.Schema(
  {
    requested_date : Date,
    group_id : Number,
    presentation : String,
    reply : String,
    date_of_reply : Date,
    ppt : String,
    report : String,
    u_ppt : String,
    u_report : String

  }
);

//(6)PC-Add Announcement
const announcement = new mongoose.Schema(
  {
    en : Number,
    announcement : String,
    date_of_announcement : Date
  }
);

//(7)Guides Allocation
const guide_allocation = new mongoose.Schema(
  {
    grp_id : Number,
    project_title : String,
    members : Number,
    guide1 : String,
    guide2 : String,
    
  }
);

//(8)Faculty appeal to PC
const faculty_appeal = new mongoose.Schema(
  {
    requested_date : Date,
    fid : Number,
    f_name : String,
    appeal : String,
    reply : String,
    date_of_reply : Date,
    fappeal_status : Number
  }
);

//models

//REGISTRATION
const reg_data = mongoose.model('registers',register);
//(1) DEFINITION
const define_data = mongoose.model('defines',define);
//(2) FOR SCHEDULING TIME
const schedule_data = mongoose.model('schedule',schedule);
//(3) FOR REPORT SUBMISSION
const report_data = mongoose.model('report',report);
//(4) FOR APPEAL
const appeal_data = mongoose.model('appeal',appeal);
//(5) FOR EXTERNAL
const external_data = mongoose.model('external',external);
//(6) FOR ANNOUNCEMENTS
const announcement_data = mongoose.model('announcement',announcement);
//(7) GUIDES ALLOCATION
const allocation_data = mongoose.model('guide_allocations',guide_allocation);
//(8) FACULTY APPEAL TO PC
const fappeal_data = mongoose.model('faculty_appeals',faculty_appeal);

//APIS



//REGISTRATION


app.post("/api/registration",(req,resp)=>{
  console.log("welcome");
  var username = req.body.username;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var phone = req.body.phone;
  var dob = req.body.dob;
  var pwd = req.body.pwd;
  var cpwd = req.body.cpwd;
  var role = req.body.role;
  var gender = req.body.gender;
  
  let enroll_no;
  console.log("Before"+username);
  reg_data.find({}).then(data =>{
  
    let temp;

    temp=data.length;
    console.log(temp);
    console.log("aftrrefore"+username);
    console.log(lastname);
   
    if(temp===0){
      enroll_no=1;
      //console.log(username);
      const check = new reg_data({ enroll_no: enroll_no,fname: username,lname: lastname,email: email,mobile: phone,dob: dob,pwd: pwd,cpwd : cpwd,role: role,gender: gender });

        check.save().then(()=>{
          resp.send({message:"Done!!!!"});
      }).catch((err)=>{
          console.log(err);
      }) 
    }

    else{
      reg_data.find({}).sort({enroll_no:-1}).limit(1).then(data => {

        let en1=data[0].enroll_no;
        enroll_no=en1+1;
        const check1 = new reg_data({ enroll_no: enroll_no,fname: username,lname: lastname,email: email,mobile: phone,dob: dob,pwd: pwd,cpwd : cpwd,role: role,gender: gender });

        check1.save().then(()=>{
          resp.send({message:"Done!!!!"});
      }).catch((err)=>{
          console.log(err);
      }) 


      });
    }
  })
 

  // const rp = req.files.regimg[0];
  // var fn=rp.filename;

      



 
});

//To get email for login id
app.get('/api/get_registerdata', (req, res) => {
  var id = req.query.semail;
  console.log(id);
  reg_data.find({  email:id }).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});


//To Get all data of faculty
app.get('/api/getdata_facultydata', (req, res) => {
  reg_data.find({role:'faculty'}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

// //testing
// app.get('/api/get_test', (req, res) => {
//   reg_data.find().sort({_id:1}).then(data => {
//     console.log(data);
//     res.json(data);
//   }).catch(error => {
//     console.log(error);
//     res.status(500).send('Error retrieving data from database');
//   });
// });

//To Get all data of student
app.get('/api/getdata_studentdata', (req, res) => {
  reg_data.find({role:'student'}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});


//To get particular data
// app.post('/api/get_registerdata', (req, res) => {
//   const ObjectID = require('mongodb').ObjectId;
//   console.log("welcome");
//   var id = req.body.stu;
//   console.log(id);
//   reg_data.find({  email:id }).then(data => {
//     console.log(data);
//     res.json(data);
//   }).catch(error => {
//     console.log(error);
//     res.status(500).send('Error retrieving data from database');
//   });
// });



//FORGOT PASSWORD
app.post('/api/forgot_password', (req, res) => {
  
  var email = req.body.email;
  reg_data.find({  email:email }).then(data => {
    console.log(data);
    res.json(data);
    if(data){
      var pwd=data[0].pwd;
      var fname = data[0].fname;
      console.log(pwd);
      console.log(email);
      const smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "techappo1812@gmail.com",
          pass: "htwfevdbthogbbqu",
        },
      });
      const message = {
        from: "techappo1812@gmail.com",
        to: email,//email id
      
        subject: "HMS",
        text: "Hello, "+ fname +" Your Passwors is--->>"+ pwd +".",
        //html:"<h1>hi</h1>
      };

     smtpTransport.sendMail(message, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          //console.log("Email sent:", info.response);
          res.send({message:"Password Send on Email Id!!!"});
        }
      });
    }
    else{
      res.send({message:"Email Id not found..."})
    }
  })


});

//LOGIN
app.post('/api/login', (req, res) => {
  const ObjectID = require('mongodb').ObjectId;
  console.log("welcome");
  //var id = req.body.id;
  var email = req.body.email;
  var password = req.body.password;
  var type = req.body.type;
  console.log(email);
  console.log(password);
  console.log(type);
  reg_data.find({ $and: [ {email:email}, { pwd:password},{role:type} ] }).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});


//APIs of Project-Definition --> START

//To store data in database
// app.post("/api/define",(req,resp)=>{
//     console.log("welcome");
//    var s1_id = req.body.s1_id;
//    var s1_name = req.body.s1_name;
//    var s2_id = req.body.s2_id;
//    var s2_name = req.body.s2_name;
//    var s3_id = req.body.s3_id;
//    var s3_name = req.body.s3_name;
//    var proj_title = req.body.proj_title;
//    var proj_def = req.body.proj_def;
//    var proj_des = req.body.proj_des;
//    var tech = req.body.tech;
//    var date = current;
   
//    console.log(date);

//   const check1 = new define_data({ stu1_id: s1_id,stu1_name: s1_name,stu2_id: s2_id,stu2_name: s2_name,stu3_id: s3_id,stu3_name: s3_name,project_title : proj_title,project_definition : proj_def,project_description : proj_des,techology_used : tech,entry_date : date });
 
//       check1.save().then(()=>{
//         resp.send({message:"Done!!!!"});
//     }).catch((err)=>{
//         console.log(err);
//     }) 
   
// });


// app.post("/api/define",(req,resp)=>{
//   console.log("welcome");
//     var role = req.body.role;
//     //  var s1_id = req.body.stu1_id;
//     //  var s1_name = req.body.stu1_name;
//     //  var s2_id = req.body.stu2_id;
//     //  var s2_name = req.body.stu2_name;
//     //  var s3_id = req.body.stu3_id;
//     //  var s3_name = req.body.stu3_name;
//      var proj_title = req.body.proj_title;
//      var proj_def = req.body.proj_def;
//      var proj_des = req.body.proj_des;
//      var tech = req.body.tech;
//      var company = req.body.company;
//      var address = req.body.address;
//      var iguide = req.body.iguide;
//      var date = current;
//      var fileu = req.body.image;

//      console.log(proj_title);
//      console.log(iguide);
//      console.log(role);
//      console.log(fileu);
  
     

//   let group_id;
//   //console.log("Before"+s1_id);
//   define_data.find({}).then(data =>{



  
//     let temp;

//     temp=data.length;
   
//     console.log(temp);
   
//     if(temp===0){
//       group_id=1;
//       //console.log(username);
//       const check1 = new define_data({group_id: group_id,group_type: role, project_title : proj_title,project_definition : proj_def,project_description : proj_des,techology_used : tech,entry_date : date,company_name: company,company_address: address,industrial_guide: iguide });
 
//         check1.save().then(()=>{
//           resp.send({message:"Done!!!!"});
//       }).catch((err)=>{
//           console.log(err);
//       }) 
//     }

//     else{
//       console.log(temp);
//       define_data.find({}).sort({group_id:-1}).limit(1).then(data => {
        
//         let en1=data[0].group_id;
//         group_id=en1+1;
//         console.log(en1);
//         console.log(group_id);
//         const check1 = new define_data({group_id: group_id,group_type: role, project_title : proj_title,project_definition : proj_def,project_description : proj_des,techology_used : tech,entry_date : date,company_name: company,company_address: address,industrial_guide: iguide,offer_letter: fileu });

//         check1.save().then(()=>{
//           resp.send({message:"Done!!!!"});
//       }).catch((err)=>{
//           console.log(err);
//       }) 


//       });
//     }
//   })
 

//   // const rp = req.files.regimg[0];
//   // var fn=rp.filename;

      



 
// });

//API to get Definition
// var upload12=multer({storage:storage});
//  var multi=upload12.fields([{name:'fileu'}]);
// app.post("/api/define",multi,(req,resp)=>{
//   console.log("welcome");
//   if(req.files){
//     var role = req.body.role;    
//      var proj_title = req.body.proj_title;
//      var proj_def = req.body.proj_def;
//      var proj_des = req.body.proj_des;
//      var tech = req.body.tech;
//      var company = req.body.company;
//      var address = req.body.address;
//      var iguide = req.body.iguide;
//      var a = req.files.fileu[0];
//      var date = current;
//     var f1name=a.filename;  
//     var x;
//     var y;    
//      const studentsData = JSON.parse(req.body.studentsData);     
//      let studentIds = [];
//      let studentNames = [];
     
//      for (const [key, value] of Object.entries(studentsData)) {    
//        if (key.endsWith('_id')) {
//          const studentId = value;
//          studentIds.push(studentId);
//        } else if (key.endsWith('_name')) {
//          const studentName = value;
//          studentNames.push(studentName);
//        }
//      }
     
//      for (let i = 0; i < studentIds.length; i++) {
//        const studentId = studentIds[i];
//        const studentName = studentNames[i];
//        ///insert query
//        console.log(`${studentId} ${studentName}`);
//        console.log(role);
//        console.log(proj_title);
//        console.log(proj_def);
//        console.log(proj_des);
//        console.log(tech);
//        console.log(company);
//        console.log(address);
//        console.log(iguide);
//        console.log(a);
//        console.log(date);
//        console.log(f1name);

//          let group_id;
//   define_data.find({}).then(data =>{
  
//     let temp;

//     temp=data.length;
   
//     console.log("MY new temp is"+temp);
   
//     if(temp === 0){
//       group_id=1;
//       const check1 = new define_data({group_id: group_id,group_type: role,stu_id:studentId,stu_name:studentName, project_title : proj_title,project_definition : proj_def,project_description : proj_des,techology_used : tech,entry_date : date,company_name: company,company_address: address,industrial_guide: iguide,offer_letter: f1name });
 
//         check1.save().then(()=>{
//         resp.send({message:"Done!!!!"});
//       }).catch((err)=>{
//           console.log(err);
//       }) 
//     }


    

//     if(temp !== 0){
//       console.log(temp);
//       define_data.find({}).sort({group_id:-1}).limit(1).then(data1 => {
        
//         let en1=data1[0].group_id;
//         console.log("MY en1 is"+en1);
//         group_id=parseInt(en1)+parseInt(1);
//         console.log("MY group_id is"+group_id);
//         console.log(en1);
       
//         const check1 = new define_data({group_id: group_id,group_type: role, project_title : proj_title,project_definition : proj_def,project_description : proj_des,techology_used : tech,entry_date : date,company_name: company,company_address: address,industrial_guide: iguide,offer_letter: f1name });

//         check1.save().then(()=>{
//           resp.send({message:"Done!!!!"});
//       }).catch((err)=>{
//           console.log(err);
//       }) 


//       });
//     }
//   })

//      }
//   }

 
// });


//
var upload12=multer({storage:storage});
 var multi=upload12.fields([{name:'fileu'}]);

 app.post("/api/define",multi,(req,resp)=>{
  console.log("welcome");
  if(req.files){
    var role = req.body.role;    
     var proj_title = req.body.proj_title;
     var proj_def = req.body.proj_def;
     var proj_des = req.body.proj_des;
     var tech = req.body.tech;
     var company = req.body.company;
     var address = req.body.address;
     var iguide = req.body.iguide;
     var a = req.files.fileu[0];
     var date = current;
    var f1name=a.filename; 
    var u_projtitle = "";
    var u_projdef = "";
    var u_projdes = "";
    var u_techs = "";
       
     const studentsData = JSON.parse(req.body.studentsData);  
     let studentIds = [];
     let studentNames = [];     
     for (const [key, value] of Object.entries(studentsData)) {    

       if (key.endsWith('_id')) {
         const studentId = value;
         studentIds.push(studentId);
       } else if (key.endsWith('_name')) {
         const studentName = value;
         studentNames.push(studentName);
       }
     }
          for (let i = 0; i < studentIds.length; i++) {
       const studentId = studentIds[i];
       const studentName = studentNames[i];

       ///insert query

      // console.log(`${studentId} ${studentName}`);
      
          let group_id;
let group_id_set = false;
define_data.find({}).then(data => {
  let temp = data.length;
  console.log("MY new temp is" + temp);
  if (temp === 0) {
    group_id = 1;
    const check1 = new define_data({group_id: group_id, group_type: role, stu_id: studentId, stu_name: studentName, project_title: proj_title, project_definition: proj_def, project_description: proj_des, techology_used: tech, entry_date: date, company_name: company, company_address: address, industrial_guide: iguide, offer_letter: f1name,u_project_title : u_projtitle, u_project_definition: u_projdef,u_project_description:u_projdes,u_techology_used:u_techs});
    check1.save().then(() => {
     // resp.send({ message: "Done!!!!" });
    }).catch((err) => {
      console.log(err);
    })
  }
  if (temp !== 0) {
    console.log(temp);
    define_data.find({}).sort({ group_id: -1 }).limit(1).then(data1 => {
      let en1 = data1[0].group_id;
      console.log("MY en1 is" + en1);
      if (!group_id_set) {
        group_id = parseInt(en1) + parseInt(1);
        group_id_set = true;
      }
      console.log("MY group_id is" + group_id);
      console.log(en1);
      const check1 = new define_data({ group_id: group_id, group_type: role,stu_id: studentId, stu_name: studentName, project_title: proj_title, project_definition: proj_def, project_description: proj_des, techology_used: tech, entry_date: date, company_name: company, company_address: address, industrial_guide: iguide, offer_letter: f1name,u_project_title : u_projtitle, u_project_definition: u_projdef,u_project_description:u_projdes,u_techology_used:u_techs });
      check1.save().then(() => {
       // ;
      }).catch((err) => {
        console.log(err);
      })
    });
  }
});
          
        }
      }
      resp.send({ message: "Done!!!!" })
    }
    
 );



 //New way of API calling data with the help of MOdel
  
//To get particular student data
  app.get('/api/get_define', (req, res) => {
    var enroll_no=req.query.enroll_no;
    define_data.find({stu_id:enroll_no}).then(data => {
      console.log(data[0].group_id);
      console.log(data);
      res.json(data);
    }).catch(error => {
      console.log(error);
      res.status(500).send('Error retrieving data from database');
    });
  });




//To get all data
app.get('/api/get_define1', (req, res) => {
  var fac_email=req.query.fac_email;
  allocation_data.find({guide1 : fac_email}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});


//To get distinct id of data
app.get('/api/get_dis_define', (req, res) => {
  console.log("distinct data api ");
  define_data.distinct("group_id").then(data => {
    
    console.log(data);
    res.send(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//To get data of a particular ID
  app.post('/api/getdata_definedata', (req, res) => {
    const ObjectID = require('mongodb').ObjectId;
    console.log("welcome");
    var id = req.body.id;
    console.log(id);
    define_data.find({group_id:id}).then(data => {
      
      console.log(data);
      res.json(data);
    }).catch(error => {
      console.log(error);
      res.status(500).send('Error retrieving data from database');
    });
  });


//To get data of a group members
app.post('/api/getdata_memberdata', (req, res) => {
  const ObjectId = require('mongodb').ObjectId;
  console.log("welcome");
  var grpid = req.body.grpid;
  var stuid = req.body.stuid;
  console.log(grpid);
  console.log(stuid);
  define_data.find({ $and: [ {group_id:grpid} ] }).then(data => {
    
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});


//To update the row
  app.post('/api/updated_define', (req, res) => {
    const ObjectId = require('mongodb').ObjectId;
    console.log("update define api called");
    var id = req.body.id;
  
  var u_projtitle = req.body.u_projtitle
  var u_projdef = req.body.u_projdef;
  var u_projdes = req.body.u_projdes;
  var u_techs = req.body.u_techs;
   var date = date;
   
  
   define_data.find({group_id : id }).then(data => {
     console.log("hello report version");
     let rpv1 = data[0].u_projtitle;
     console.log(rpv1);
    
 
 
     //console.log(data);
 
     if (rpv1 === "") {
       define_data.updateOne({group_id : id }, { $set: { u_project_title : u_projtitle, u_project_definition: u_projdef,u_project_description:u_projdes,u_techology_used:u_techs } }).then(data => {
         console.log(data);
         res.json(data);
       }).catch(error => {
         console.log(error);
         res.status(500).send('Error retrieving data from database');
       });
     }
 
  
   }).catch(error => {
     console.log(error);
     res.status(500).send('Error retrieving data from database');
   });

  });
    
  


//APIs of Project-Definiton --> END 


//APIS for Scheduling Time --> START

//To store data in database
app.post("/api/schedule",(req,resp)=>{
  console.log("welcome");
  var requested_date = date;
  var groupid = req.body.groupid;
  var purpose = req.body.purpose;
  var rdate = req.body.rdate;
  var rtime = req.body.rtime;
  var status = 2;
  var reply = req.body.reply;
 
 console.log(rtime);

const check1 = new schedule_data({ group_id: groupid,purpose: purpose,request_date: rdate,request_time: rtime,requested_date: requested_date,schedule_status: status,reply: reply });

    check1.save().then(()=>{
      resp.send({message:"Done!!!!"});
  }).catch((err)=>{
      console.log(err);
  }) 
 
});

//To get all data
app.get('/api/get_schedule1', (req, res) => {
  schedule_data.find({}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//To get data of a particular ID (Meeting Reply to student)
app.post('/api/getdata_schedule', (req, res) => {
  const ObjectID = require('mongodb').ObjectId;
  console.log("welcome");
  var id = req.body.id;
  console.log(id);
  schedule_data.find({"_id": new ObjectId(id.toString())}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//Api for reply to student by faculty
app.post('/api/meeting_reply', (req, res) => {
  var id = req.body.id;  
  var reply=req.body.reply;
  var status = req.body.status;
   console.log(id);
   console.log(reply);
   console.log(status);
    const ObjectID = require('mongodb').ObjectId;
    schedule_data.updateMany({"_id": new ObjectId(id)},{$set:{reply:reply,schedule_status:status}}).then(data => {
      console.log(data);
      res.json(data);
    }).catch(error => {
      console.log(error);
      res.status(500).send('Error retrieving data from database');
    });
  });

//APIS for Scheduling Time --> END


//APIS for REPORT --> START

//To store data in database
// app.post("/api/report",multi,(req,resp)=>{
//   console.log("welcome");
//   var requested_date = date;
//   var groupid = req.body.group_id;
//   var sd = req.body.sd;
//   var ed = req.body.ed;
//   var fn1 = "";
//   var fn2 = "";
//   var fn3 = "";
 
//  console.log(groupid);
//  console.log(sd);
//  console.log(ed);

//  const rp = req.files.rpimage[0];
//       var fn=rp.filename;

//       const check1 = new report_data({ group_id: groupid,requested_date: requested_date,start_date: sd,end_date: ed,report: fn,rep_ver1: fn1,rep_ver2: fn2,rep_ver3:fn3 });
//       check1.save().then(()=>{
//         resp.send({message:"Done!!!!"});
//     }).catch((err)=>{
//         console.log(err);
//     }) 
    
// });


app.post('/api/report', upload1.single('rpimage'), (req, resp) => {
  console.log('welcome');
  var requested_date = date;
  var groupid = req.body.group_id;
  var week = req.body.week;
  var fn1 = '';
  var fn2 = '';
  var fn3 = '';
  
  console.log(groupid);
 
  console.log(week);
  
  const rp = req.file;
  var fn = rp.filename;
  
  const check1 = new report_data({ group_id: groupid, week : week, requested_date: requested_date, report: fn, rep_ver1: fn1, rep_ver2: fn2, rep_ver3: fn3 });
  check1.save().then(() => {
    resp.send({ message: 'Done!!!!' });
  }).catch((err) => {
    console.log(err);
  });
});

//To get all data
app.get('/api/get_report1', (req, res) => {
  report_data.find({}).then(data => {
    
    let count = data.length;
    console.log(count);
    console.log()
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//To get data of particular id
app.post('/api/getdata_reportdata', (req, res) => {
  console.log("welcome");
  var id = req.body.id;
  console.log(id);
  report_data.find({group_id : id}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//To update the row
// app.post('/api/updated_report',upload1.single('rpimage'), (req, res) => {
//   console.log("update report api");
//   var id = req.body.id;
//   console.log(id);
//   // const rp = req.files.rpimage[0];
//   //     var fn=rp.filename;
 
//   const ObjectID = require('mongodb').ObjectId;
//   report_data.find({"_id": new ObjectId(id)}).then(data => {
//    console.log("hello report version");
//    let rpv1 = data[0].rep_ver1;
//    let rpv2 = data[0].rep_ver2;
//    let rpv3 = data[0].rep_ver3;
//    console.log(rpv1);

//     console.log(data);
//     res.json(data);
//   }).catch(error => {
//     console.log(error);
//     res.status(500).send('Error retrieving data from database');
//   });
  

//     if(rpv1 === ""){
//       const ObjectID = require('mongodb').ObjectId;
//     report_data.updateOne({"_id": new ObjectId(id)},{$set:{rep_ver1:fn}}).then(data => {
//     console.log(data);
//     res.json(data);
//   }).catch(error => {
//     console.log(error);
//     res.status(500).send('Error retrieving data from database');
//   });
//     }
    
  
//   if(rpv1 !== "" && rpv2 === ""){
//     const ObjectID = require('mongodb').ObjectId;
//     report_data.updateOne({"_id": new ObjectId(id)},{$set:{rep_ver2:fn}}).then(data => {
//     console.log(data);
//     res.json(data);
//   }).catch(error => {
//     console.log(error);
//     res.status(500).send('Error retrieving data from database');
//   });
//   }


//   if(rpv1 !== "" && rpv2 !== "") {
//     const ObjectID = require('mongodb').ObjectId;
//     report_data.updateOne({"_id": new ObjectId(id)},{$set:{rep_ver3:fn}}).then(data => {
//     console.log(data);
//     res.json(data);
//   }).catch(error => {
//     console.log(error);
//     res.status(500).send('Error retrieving data from database');
//   });
//   }

// });

app.post('/api/updated_report', upload1.single('rpimage'), (req, res) => {
  console.log("update report api");
  var id = req.body.id;
  console.log(id);

 const rp = req.file;
  var fn = rp.filename;

  const ObjectId = require('mongodb').ObjectId;
  report_data.find({ group_id : id }).then(data => {
    console.log("hello report version");
    let rpv1 = data[0].rep_ver1;
    let rpv2 = data[0].rep_ver2;
    let rpv3 = data[0].rep_ver3;
    console.log(rpv1);
    console.log(rpv2);
    console.log(rpv3);


    //console.log(data);

    if (rpv1 === "") {
      report_data.updateOne({ group_id : id }, { $set: { rep_ver1: fn } }).then(data => {
        console.log(data);
        res.json(data);
      }).catch(error => {
        console.log(error);
        res.status(500).send('Error retrieving data from database');
      });
    }

    if (rpv1 !== "" && rpv2 === "") {
      report_data.updateOne({group_id : id }, { $set: { rep_ver2: fn } }).then(data => {
        console.log(data);
        res.json(data);
      }).catch(error => {
        console.log(error);
        res.status(500).send('Error retrieving data from database');
      });
    }

    if (rpv1 !== "" && rpv2 !== "") {
      report_data.updateOne({ group_id : id }, { $set: { rep_ver3: fn } }).then(data => {
        console.log(data);
        res.json(data);
      }).catch(error => {
        console.log(error);
        res.status(500).send('Error retrieving data from database');
      });
    }
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});


//APIS for REPORT --> END



//APIS for APPEAL --> START

//To store data in database
app.post("/api/appeal",(req,resp)=>{
  console.log("welcome");
  var requested_date = date;
  var groupid = req.body.groupid;
  var sid = req.body.sid;
  var appeal = req.body.appeal;
  var reply = req.body.reply;
  var status = 2;
  console.log(status);

const check1 = new appeal_data({ group_id: groupid,requested_date: requested_date,stu_id: sid,appeal: appeal,reply:reply,appeal_status: status});

    check1.save().then(()=>{
      resp.send({message:"Done!!!!"});
  }).catch((err)=>{
      console.log(err);
  } ) 
 
});

//To get all data
// app.get('/api/get_appeal', (req, res) => {
//   appeal_data.find().then(data => {
//     console.log(data);
//     res.json(data);
//   }).catch(error => {
//     console.log(error);
//     res.status(500).send('Error retrieving data from database');
//   });
// });

//APIS for APPEAL --> END



//APIS for EXTERNAL EXAM --> START


var upload2=multer({storage:storage});
var multi1=upload2.fields([{name:'rpimage'},{name:'ureport'}]);

//To store data in database
app.post("/api/external",multi1,(req,resp)=>{
  console.log("welcome");
  var requested_date = date;
  var groupid = req.body.groupid;
  var presentation = req.body.presentation;
  var u_ppt = "";
  var u_report = "";
  
  const rp = req.files.rpimage[0];
  var fn1=rp.filename;

  const rp1 = req.files.ureport[0];
  var fn2=rp1.filename;
console.log(fn1);
console.log(presentation);
const check1 = new external_data({ group_id: groupid,presentation : presentation, requested_date: requested_date,ppt: fn1,report: fn2,u_ppt: u_ppt,u_report: u_report});

    check1.save().then(()=>{
      resp.send({message:"Done!!!!"});
  }).catch((err)=>{
      console.log(err);
  }) 
 
});

//To get all data
app.get('/api/get_external1', (req, res) => {
  external_data.find({}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//To get data of particular id
app.post('/api/getdata_externaldata', (req, res) => {
  const ObjectID = require('mongodb').ObjectId;
  console.log("welcome");
  var id = req.body.id;
  console.log(id);
  external_data.find({group_id : id}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//To update the row

var upload2=multer({storage:storage});
var multi1=upload2.fields([{name:'rpimage'},{name:'ureport'}]);

app.post('/api/updated_external',multi1, (req, res) => {
  console.log("get external update api"); 
  var id = req.body.id;
  var newppt = req.body.newppt;
  var newreport = req.body.newreport;
  console.log(newppt);
  console.log(newreport);

  const rp = req.files.rpimage[0];
  var fn1=rp.filename;

  const rp1 = req.files.ureport[0];
  var fn2=rp1.filename;
 
  const ObjectID = require('mongodb').ObjectId;
  external_data.updateMany({group_id : id},{$set:{ppt: fn1,report: fn2 }}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//APIS for EXTRNAL --> END
 

//APIS for ADD ANNOUNCEMENT --> START

//to store data
app.post("/api/announcement",(req,resp)=>{
  console.log("welcome");
  var announcement = req.body.announcement;
  var date_of_announcement = date;
  let sen;
  let temp;
  announcement_data.find({}).then(data => {
    temp=data.length;
    //console.log("My temp iss"+temp);
    if(temp===0)
    {
      sen=1;
      const check1 = new announcement_data({en:sen,announcement:announcement,date_of_announcement:date_of_announcement});
      check1.save().then(()=>{
      resp.send({message:"Done!!!!"});
      }).catch((err)=>{
          console.log(err);
      }) 

    }

    else{

      announcement_data.find({}).sort({en:-1}).limit(1).then(data => {      

         let en1=data[0].en;
         //console.log("My id is"+en1);
         sen=en1+1;
         //console.log("FInal is"+sen);
        const check1 = new announcement_data({en:sen,announcement:announcement,date_of_announcement:date_of_announcement});
        check1.save().then(()=>{
          
          resp.send({message:"Done!!!!"});
          }).catch((err)=>{
              console.log(err);
          }) 
});
     
}
});
});
  




//To get all data
app.get('/api/get_announcement_record', (req, res) => {
  announcement_data.find().then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});


//To get all data testing
// app.get('/api/get_announcement_record', (req, res) => {
//   announcement_data.find({}).sort({en:-1}).limit(1).then(data => {
//     if (data===null) {
//       $set: en=>1;
//     } else {
//       $set: en=>en+1;
//     }
//     console.log(data);
//     res.json(data);
//   }).catch(error => {
//     console.log(error);
//     res.status(500).send('Error retrieving data from database');
//   });
// });

//To get data of a particular ID
app.post('/api/getdata_announcement_record', (req, res) => {
  const ObjectID = require('mongodb').ObjectId;
  console.log("welcome");
  var id = req.body.id;
  console.log(id);
  announcement_data.find({"_id": new ObjectId(id.toString())}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//TO UPDATE ADDED ANNOUNCEMENT
app.post('/api/updated_announcement_record', (req, res) => {
    
  var id = req.body.id;
  var announcement = req.body.announcement;
  console.log(announcement);

 
  const ObjectID = require('mongodb').ObjectId;
  announcement_data.updateOne({"_id": new ObjectId(id)},{$set:{announcement: announcement }}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});



//APIS for ADD ANNOUNCEMENT --> END


//APIS FOR GUIDE ALLOCATION --> START

//to store data
app.post("/api/guide_allocation",(req,resp)=>{
  console.log("welcome");
  var grp_id = req.body.grp_id;
  var guide1 = req.body.guide1;
  var guide2 = req.body.guide2;
  console.log(guide1);
  console.log(guide2);

const check1 = new allocation_data({grp_id : grp_id, guide1 : guide1, guide2 : guide2});

    check1.save().then(()=>{
      resp.send({message:"Done!!!!"});
  }).catch((err)=>{
      console.log(err);
  }) 
 
});

//To get all data
// app.get('/api/get_allocation_record1', (req, res) => {
//   allocation_data.find().then(data => {
//     console.log(data);
//     res.json(data);
//   }).catch(error => {
//     console.log(error);
//     res.status(500).send('Error retrieving data from database');
//   });
// });



//To get data of a particular ID
app.post('/api/getdata_allocation_data', (req, res) => {
  const ObjectID = require('mongodb').ObjectId;
  
  var id = req.body.id;
  console.log(id);
  allocation_data.find({"_id": new ObjectId(id.toString())}).then(data => {
    
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});


//To delete particular allocation data
app.post('/api/delete_allocation', (req, res) => {
  const ObjectID = require('mongodb').ObjectId;
  console.log("welcome");
  
  var id = req.body.id;
  console.log(id);
  
  allocation_data.deleteOne({"_id": new ObjectId(id.toString())}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});


//APIS FOR GUIDE ALLOCATION --> END

//API for get all data from appeal table to PC
app.get('/api/get_plea', (req, res) => {
  appeal_data.find().then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});


//To get data of a particular ID
app.post('/api/getdata_plea_data', (req, res) => {
  const ObjectID = require('mongodb').ObjectId;
  console.log("welcome");
  var id = req.body.id;
  
  appeal_data.find({"_id": new ObjectId(id.toString())}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});



//Api for reply to student by PC
app.post('/api/reply_to_stu', (req, res) => {
var id = req.body.id;  
var reply=req.body.reply;
var date_of_reply = date;
var status = req.body.status;
 console.log(id);
 console.log(status);
  const ObjectID = require('mongodb').ObjectId;
  appeal_data.updateMany({"_id": new ObjectId(id)},{$set:{reply:reply,date_of_reply:date,appeal_status: status}}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//APIS FOR FACULTY

//APIS for FACULTY APPEAL TO PC --> START

//To store data in database
app.post("/api/faculty_appeal",(req,resp)=>{
  console.log("welcome");
  var requested_date = date;
  var fid = req.body.fid;
  var f_name = req.body.f_name;
  var appeal = req.body.appeal;
  var reply = req.body.reply;
  var status = 2;
const check1 = new fappeal_data({ fid: fid,requested_date: requested_date,f_name: f_name,appeal: appeal,reply:reply,fappeal_status:status});

    check1.save().then(()=>{
      resp.send({message:"Done!!!!"});
  }).catch((err)=>{
      console.log(err);
  } ) 
 
});

//To get all data
app.get('/api/get_fappeal', (req, res) => {
  fappeal_data.find().then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//To get data of a particular ID (Meeting Reply to student)
app.post('/api/getdata_fappealdata', (req, res) => {
  const ObjectID = require('mongodb').ObjectId;
  console.log("welcome");
  var id = req.body.id;
  console.log(id);
  fappeal_data.find({"_id": new ObjectId(id.toString())}).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.status(500).send('Error retrieving data from database');
  });
});

//Api for reply to faculty by PC
app.post('/api/reply_to_pc', (req, res) => {
  var id = req.body.id;  
  var reply=req.body.reply;
  var date_of_reply = date;
  var status = req.body.status;
   console.log(id);
   console.log(status);
    const ObjectID = require('mongodb').ObjectId;
    fappeal_data.updateMany({"_id": new ObjectId(id)},{$set:{reply:reply,date_of_reply:date,fappeal_status: status}}).then(data => {
      console.log(data);
      res.json(data);
    }).catch(error => {
      console.log(error);
      res.status(500).send('Error retrieving data from database');
    });
  });


//APIS for Joining Tables

//Joining tables define + guide_allocation
app.get('/api/get_allocation_record', (req, res) => {
  console.log("get allocation api");
  define_data.aggregate([
    {
      $lookup: {
        from: 'guide_allocations',
        localField: 'group_id',
        foreignField: 'grp_id',
        as: 'allocate_data'
      }
    }
  ]).then(data => {
    console.log(data);
    res.json(data);
  }).catch(error => {
    console.log(error);
    res.send('Error retrieving data from database');
  });
});







//Joining tables define + schedules

// app.get('/api/get_schedule', (req, res) => {
//   console.log("get schedule api");
//   var enroll_no=req.query.enroll_no;
//   define_data.aggregate([
   
//     {
//       $lookup: {
//         from: 'schedules',
//         localField: 'group_id',
//         foreignField: 'group_id',
//         as: 'schedule_data'
//       }
//     }
//   ]).then(data => {
//     console.log(data);
//     res.json(data);
    
//   }).catch(error => {
//     console.log(error);
//     res.send('Error retrieving data from database');
//   });
// });

// app.get('/api/get_schedule', (req, res) => {
//   console.log("get schedule api");
//   var enroll_no=req.query.enroll_no;
//   var group_id=req.query.group_id;
//   define_data.aggregate([
//     {
//       $match: {
//         group_id: group_id // filter by the specified group_id
//       }
//     },
//     {
//       $lookup: {
//         from: 'schedules',
//         localField: 'group_id',
//         foreignField: 'group_id',
//         as: 'schedule_data'
//       }
//     }
//   ]).then(data => {
//     console.log(data);
//     res.json(data);
    
//   }).catch(error => {
//     console.log(error);
//     res.send('Error retrieving data from database');
//   });
// });

//here is the original api 
app.get('/api/get_schedule', (req, res) => {
  console.log("get schedule api");
  var enroll_no=req.query.enroll_no;
  define_data.find({  stu_id : enroll_no }).then(data => {     
    if (data.length > 0) {
      var group = data[0].group_id;
      // rest of the code that uses the group variable
      console.log(group);
      define_data.aggregate([
    
        {
          $match: {
            group_id: group // filter by the specified group_id
          }
        },
        {
          $lookup: {
            from: 'schedules',
            localField: 'group_id',
            foreignField: 'group_id',
            as: 'schedule_data'
          }
        }
      ]).then(data => {
        
        console.log(data);
        res.json(data);
        
      }).catch(error => {
        console.log(error);
        res.send('Error retrieving data from database');
      });
    } else {
      console.log("No document found for student ID: ", enroll_no);
      res.send("No data found for the specified student ID");
    }
      
  });
});



//$or: [ {guide1:fac_email}, { guide2:fac_email} ]
// app.get('/api/get_allocation_record1', (req, res) => {
//   console.log("get allocation record api");
//   var fac_email=req.query.fac_email;
//   allocation_data.find({  $or: [ {guide1:fac_email}, { guide2:fac_email} ] }).then(data => {     
//     if (data.length > 0) {
//       var results = []; 
//       var count = data.length;
//       var group = data[0].grp_id;
      
//       // rest of the code that uses the group variable
//       console.log(count);
//     //  console.log(group);
//       //console.log(group1);


//       for (var i = 0; i < count; i=i+1){
//         var group1 = data[i].grp_id;
//         console.log("My id are::::"+group1);
//       define_data.aggregate([
       
    
//         {
//           $match: {
//             group_id: 3 // filter by the specified group_id
//           }
//         },
//         {
//           $lookup: {
//             from: 'guide_allocations',
//             localField: 'group_id',
//             foreignField: 'grp_id',
//             as: 'allocate_data'
//           }
//         }
//       ]).then(data => {
//         results.push(data);
//       })
      
        
// console.log(results);


//     } 
    
//   }
//   res.json(results);
    
    
    
    
    
    
//     else {
//       console.log("No document found for student ID: ", enroll_no);
//       res.send("No data found for the specified student ID");
//     }
    
      
//   });
// });
// app.get('/api/get_allocation_record1', (req, res) => {
//   console.log("get allocation record api");
//   var fac_email=req.query.fac_email;
//   allocation_data.find({  $or: [ {guide1:fac_email}, { guide2:fac_email} ] }).then(data => {     
//     if (data.length > 0) {
//       var count = data.length;
//       var results = []; // array to hold the results of each iteration

//       // Use Promise.all to wait for all the promises inside the for loop to complete
//       Promise.all(data.map(item => {
//         return define_data.aggregate([
//           {
//             $match: {
//               group_id: item.grp_id // filter by the specified group_id
//             }
//           },
//           {
//             $lookup: {
//               from: 'guide_allocations',
//               localField: 'group_id',
//               foreignField: 'grp_id',
//               as: 'allocate_data'
//             }
//           }
//         ]).then(result => {
//           results.push(result); // add the result to the array
//         }).catch(error => {
//           console.log(error);
//           res.send('Error retrieving data from database');
//         });
//       })).then(() => {
//         // All promises inside the for loop have completed
//         // Send the results back to React as a JSON object
//         console.log(results)
//         res.json(results);
//       });
//     } else {
//       console.log("No document found for faculty email: ", fac_email);
//       res.send("No data found for the specified faculty email");
//     }  
//   });
// });
app.get('/api/get_allocation_record1', async (req, res) => {
  console.log("get allocation record api");
  const fac_email = req.query.fac_email;
  try {
    const data = await allocation_data.find({ $or: [{ guide1: fac_email }, { guide2: fac_email }] });
    if (data.length > 0) {
      const results = await Promise.all(data.map(async (item) => {
        const defineData = await define_data.aggregate([
          {
            $match: {
              group_id: item.grp_id,
            },
          },
          {
            $lookup: {
              from: 'guide_allocations',
              localField: 'group_id',
              foreignField: 'grp_id',
              as: 'allocate_data',
            },
          },
        ]);
        return defineData[0];
      }));
      console.log(results);
      res.json(results);
    } else {
      console.log(`No document found for faculty email: ${fac_email}`);
      res.send("No data found for the specified faculty email");
    }
  } catch (error) {
    console.log(error);
    res.send('Error retrieving data from database');
  }
});



//Joining tables define + reports
app.get('/api/get_report', (req, res) => {
  console.log("get report api");
  var enroll_no=req.query.enroll_no;
  define_data.find({  stu_id : enroll_no }).then(data => {     
    if (data.length > 0) {
      var group = data[0].group_id;
      // rest of the code that uses the group variable
      console.log(group);
      define_data.aggregate([
    
        {
          $match: {
            group_id: group // filter by the specified group_id
          }
        },
        {
          $lookup: {
            from: 'reports',
            localField: 'group_id',
            foreignField: 'group_id',
            as: 'report_data'
          }
        }
      ]).then(data => {
        
        console.log(data);
        res.json(data);
        
      }).catch(error => {
        console.log(error);
        res.send('Error retrieving data from database');
      });
    } else {
      console.log("No document found for student ID: ", enroll_no);
      res.send("No data found for the specified student ID");
    }
      
  });
});


//Joining tables define + appeals
app.get('/api/get_appeal', (req, res) => {
  console.log("get appeal api");
  var enroll_no=req.query.enroll_no;
  define_data.find({  stu_id : enroll_no }).then(data => {     
    if (data.length > 0) {
      var group = data[0].group_id;
      // rest of the code that uses the group variable
      console.log(group);
      define_data.aggregate([
    
        {
          $match: {
            group_id: group // filter by the specified group_id
          }
        },
        {
          $lookup: {
            from: 'appeals',
            localField: 'group_id',
            foreignField: 'group_id',
            as: 'appeal_data'
          }
        }
      ]).then(data => {
        
        console.log(data);
        res.json(data);
        
      }).catch(error => {
        console.log(error);
        res.send('Error retrieving data from database');
      });
    } else {
      console.log("No document found for student ID: ", enroll_no);
      res.send("No data found for the specified student ID");
    }
      
  });
});



//Joining tables define + external
app.get('/api/get_external', (req, res) => {
  console.log("get external api");
  var enroll_no=req.query.enroll_no;
  define_data.find({  stu_id : enroll_no }).then(data => {     
    if (data.length > 0) {
      var group = data[0].group_id;
      // rest of the code that uses the group variable
      console.log(group);
      define_data.aggregate([
    
        {
          $match: {
            group_id: group // filter by the specified group_id
          }
        },
        {
          $lookup: {
            from: 'externals',
            localField: 'group_id',
            foreignField: 'group_id',
            as: 'external_data'
          }
        }
      ]).then(data => {
        
        console.log(data);
        res.json(data);
        
      }).catch(error => {
        console.log(error);
        res.send('Error retrieving data from database');
      });
    } else {
      console.log("No document found for student ID: ", enroll_no);
      res.send("No data found for the specified student ID");
    }
      
  });
});






//app.listen  data from react
  app.listen(1351, () => {
    console.log('Server started on port 1351');
  });



  //  document
 // db.student.countDocuments({age:{$gt:18}})