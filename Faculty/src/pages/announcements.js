import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import Axios from 'axios';

function Announcements(){
  const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1351/api/get_announcement_record').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
    
      
    },[]);
    return(
        <>
        {list.map((val)=>{
                        return(
                          <>
            <div class="col-md-12 stretch-card grid-margin">
            <div class="card">
              <div class="card-body">
                <p class="card-title">{val.date_of_announcement}</p>
                <ul class="icon-data-list">
                
                  <li>
                    <div class="d-flex">
                          <img src='./assets/images/pc_avatar.jpg'/>
                      <div>
                        <p class="text-info mb-1">{val.ann_date}</p>
                      </div>
                      <div>
                      <p class="mb-0">{val.announcement}</p>
                      </div>
                    </div> 
                  </li>
                 
                 
                 
                </ul>
              </div>
            </div>
          </div>
          </>
           )})}
        </>
    );
}

export default Announcements;