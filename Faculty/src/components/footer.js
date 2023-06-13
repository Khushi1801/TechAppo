import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
            <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © TechAppo 2023.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"><i class="ti-heart text-danger ml-1"></i> <i class="ti-heart text-danger ml-1"></i>  <i class="ti-heart text-danger ml-1"></i></span>
          </div>
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Distributed by <a href="https://www.themewagon.com/" target="_blank">K & K</a></span> 
          </div>
        </footer> 
        </>
    );
}

export default Footer;