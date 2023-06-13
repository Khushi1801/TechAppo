import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Navheader from './components/nav_header';
import Dashboard from './pages/dashboard';
import Announcements from './pages/announcements';
import Define from './pages/deffinition';
import Edit_define from './pages/edit_definition';
import Schedule from './pages/schedule_request';
import View_request from './pages/view_request';
import Add_report from './pages/add_report';
import View_report from './pages/view_report';
import Feedback from './pages/feedback';
import Appeal from './pages/appeal';
import View_appeal from './pages/view_appeal';
import Add_external from './pages/add_external';
import View_external from './pages/view_external';
import Profile from './pages/profile';


import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';



function App() {

  if(localStorage.getItem("stu_email")==null){
const queryparams=new URLSearchParams(window.location.search);
const stu_email=queryparams.get('id');

if(stu_email===null){

  window.location.replace('http://localhost:3002/');

}
  
else{

  let obj={stu_email:stu_email};
 localStorage.setItem('stu_email',JSON.stringify(obj));
 let stu=JSON.parse(localStorage.getItem("stu_email"));
  
  
}
  }
  return (
    <div>
  
    
          <Router>
          <Header/>
          <Sidebar/> 
          <Navheader/>
              <Routes>
              <Route exact path='/' element={<Dashboard/>}/>
              <Route exact path='/Announcements' element={<Announcements/>}/>
              <Route exact path='/Define' element={<Define/>}/>
              <Route exact path='/Edit_define' element={<Edit_define/>}/>
              <Route exact path='/Schedule' element={<Schedule/>}/>
              <Route exact path='/View_request' element={<View_request/>}/>
              <Route exact path='/Add_report' element={<Add_report/>}/>
              <Route exact path='/View_report' element={<View_report/>}/>
              <Route exact path='/Feedback' element={<Feedback/>}/>
              <Route exact path='/Appeal' element={<Appeal/>}/>
              <Route exact path='/View_appeal' element={<View_appeal/>}/>
              <Route exact path='/Add_external' element={<Add_external/>}/>
              <Route exact path='/View_external' element={<View_external/>}/>
              <Route exact path='/Profile' element={<Profile/>}/>
              </Routes>
          
          </Router>
          <Footer/>

          {/* <Reg/> */}
          
          {/* <Login/> */}
        
    
    </div>
  );
}

export default App;
