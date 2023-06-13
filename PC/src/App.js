import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,json,Route,Routes} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Add_announce from './pages/add_announcements';
import Announce_record from './pages/announce_record';
import Student_list from './pages/student_list';
import Faculty_List from './pages/faculty_list';
import Guides_Allocation from './pages/guides_allocation';
import Check_List from './pages/check_list';
import Definition from './pages/definition';
import Plea_faculty from './pages/plea_faculty';
import Plea_student from './pages/plea_student';
import Final from './pages/final_assessment';
import Report from './pages/report_records';
import Feedback from './pages/feedback';
import Login from './pages/login';
import Reg from './pages/registration';
import FP from './pages/forgot_password';
import Schedule from './pages/schedule';

function App() {
  const queryparams=new URLSearchParams(window.location.search);
const stu_email=queryparams.get('id');
const fac_email=queryparams.get('id');

if(stu_email!==null){

  localStorage.clear('student');
  window.location="/";

}

if(fac_email!==null){

  localStorage.clear('faculty');
  window.location="/";

}

  // let role=json.parse(localStorage.getItem('pc'));
  // var r=role.role;
  // alert(r);
  return (
    <div className="App">
{ localStorage.getItem("pc") == null ?

<>
<Router>
<Routes>

<Route exact path='/' element={<Login/>} />
<Route exact path='/Reg' element={<Reg/>}/>
<Route exact path='/FP' element={<FP/>}/>
</Routes>
</Router>
</>
:
<>
      <Router>
        <Header/>
        <Sidebar/>
      <Routes>
      
      {/* <Route exact path='/Reg' element={<Reg/>}/> */}
        <Route exact path='/' element={<Dashboard/>}/>
        <Route exact path='/Profile' element={<Profile/>}/>
        <Route exact path='/Add_announce' element={<Add_announce/>}/>
        <Route exact path='/Announce_record' element={<Announce_record/>}/>
        <Route exact path='/Student_list' element={<Student_list/>}/>
        <Route exact path='/Faculty_list' element={<Faculty_List/>}/>
        <Route exact path='/Guides_Allocation' element={<Guides_Allocation/>}/>
        <Route exact path='/Check_List' element={<Check_List/>}/>
        <Route exact path='/Definition' element={<Definition/>}/>
        <Route exact path='/Plea_faculty' element={<Plea_faculty/>}/>
        <Route exact path='/Plea_student' element={<Plea_student/>}/>
        <Route exact path='/Final' element={<Final/>}/>
        <Route exact path='/Report' element={<Report/>}/>
        <Route exact path='/Feedback' element={<Feedback/>}/>
        <Route exact path='/Schedule' element={<Schedule/>}/>
        

      </Routes>
      <Footer/>
      </Router>  
      </>}  

{/* <BG/>

        <Login/>
    <Reg/> */}



    </div>
  );
}

export default App;
