import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import Axios from 'axios';

function Announcements(){
    const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1351/api/get_announcement_record').then((response)=>{
            let count = response.data.length;
        console.log(response.data);
        setlist(response.data);

        });
    
      
    },[]);
    return(
        <>
        <div class="content-body">

            <div class="row page-titles mx-0">
                <div class="col p-md-0">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
                    </ol>
                </div>
            </div>
            <div class="container-fluid">
            {list.map((val)=>{
                        return(
                            <>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                            
                            <>
                                <h4 class="card-title">{val.date_of_announcement}</h4>
                                <div class="bootstrap-media">
                                    <div class="media">
                                        <img class="mr-3 img-fluid" src="assests/images/pc_avatar.jpg" alt="Generic placeholder image" style={{position:"relative",left:"1vw",top:"1vw",height:"3vw",width:"3vw"}}/>
                                        <div class="media-body">
                                            {/* <h5 class="mt-0">Media heading</h5> */}
                                            <p>{val.announcement}</p></div>
                                    </div>
                                </div>
                                </>
                            
                            </div>
                        </div>
                    </div>
                </div>
                </>
                 )})}

            </div>

        </div>
        </>
    );
}

export default Announcements;