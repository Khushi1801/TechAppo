import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Dashboard from './pages/dashboard';
import Announcements from './pages/announcements';
import Meeting from './pages/meetings';
import Definitions from './pages/definition';
import Report from './pages/reports';
import Appeal from './pages/appeal';
import Footer from './components/footer';
import Assessment from './pages/final_assesstments';
import Solution from './pages/appeal_solution';
import Profile from './pages/profile';
import Student_list from './pages/student_list';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';





function App() {

  if(localStorage.getItem("fac_email")==null){
const queryparams=new URLSearchParams(window.location.search);
const fac_email=queryparams.get('id');

if(fac_email===null){

  window.location.replace('http://localhost:3002/');

}
else{

  let obj={fac_email:fac_email};
  localStorage.setItem('fac_email',JSON.stringify(obj));
  let fac=JSON.parse(localStorage.getItem("fac_email"));
  //alert(fac.fac_email);
}

}

  return (
    <>
    <div class="container-scroller">
  
        <Router>
        
                <Header/>
                <div class="container-fluid page-body-wrapper">
                      <Sidebar/> 
                      <div class="main-panel">
                        <div class="content-wrapper">
                            <Routes>
                            <Route exact path='/' element={<Dashboard/>}/>
                            <Route exact path='/Announcements' element={<Announcements/>}/>
                            <Route exact path='/Meeting' element={<Meeting/>}/>
                            <Route exact path='/Definitions' element={<Definitions/>}/>
                            <Route exact path='/Report' element={<Report/>}/>
                            <Route exact path='/Appeal' element={<Appeal/>}/>
                            <Route exact path='/Solution' element={<Solution/>}/>
                            <Route exact path='/Assesstment' element={<Assessment/>}/>
                            <Route exact path='/Profile' element={<Profile/>}/>
                            <Route exact path='/Student_list' element={<Student_list/>}/>
                            </Routes>


                        </div>
                      
                        <Footer/>
                    </div>
                </div>
        </Router>
        
      </div> 
    
    </>
  );
}

export default App;
