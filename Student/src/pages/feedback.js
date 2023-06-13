import React from "react";
import { Link } from "react-router-dom";

function Feedback(){
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
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">View Weekly Reports</h4>
                    <p class="text-muted">Use the form to  <code>.report </code> your guides</p>
                    <div class="basic-form">
                        <form class="form-inline">
                            <div class="form-group mb-2">
                                <label class="sr-only">GROUP ID</label>
                                <input type="text" readonly="readonly" class="form-control-plaintext" value="group_id"/>
                            </div>
                            <div class="form-group mb-2">
                                <label class="sr-only">PROJECT ID</label>
                                <input type="text" readonly="readonly" class="form-control-plaintext" value="project_id"/>
                            </div>
                            <div class="form-group mb-2">
                                <label class="sr-only">PROJECT TITLE</label>
                                <input type="text" readonly="readonly" class="form-control-plaintext" value="project_title"/>
                            </div>
                            <div class="form-group mb-2">
                                <label class="sr-only">DATES</label>
                                <input type="text" readonly="readonly" class="form-control-plaintext" value="date-range"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        <h4>Reports already Submitted</h4>
                        <p class="text-muted">View <code>.reports</code>  submitted</p>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Faculty</th>
                                    <th>Date-Range</th>
                                    <th>Feedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <th>Name</th>
                                    <td>January 22</td>
                                    <td>Kolor Tea Shirt For Man</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</div>
</div>
        </>
    );
}

export default Feedback;