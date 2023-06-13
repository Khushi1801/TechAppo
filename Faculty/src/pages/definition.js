import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function Definitions() {
  let fac = JSON.parse(localStorage.getItem("fac_email"));
  var fac_email = fac.email;
  var fac_enroll = fac.enroll_id;

  const [list1, setlist1] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:1351/api/get_allocation_record1", {params: { fac_email: fac_email }}).then((response) => {
      console.log(response.data);
      setlist1(response.data);
    });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title mb-0">Definitions</p>
              <div className="table-responsive">
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th>Group ID</th>
                      <th>Student ID</th>
                      <th>Student Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list1.map((val, idx) => (
                      <tr key={idx}>
                        <td>{val.group_id}</td>
                        <td>{val.stu_id}</td>
                        <td>{val.stu_name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title mb-0"></p>
              <div className="table-responsive">
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Definition</th>
                      <th>Description</th>
                      <th>Technology</th>
                      <th>Entry Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list1.map((val, idx) => (
                      <tr key={idx}>
                        <td>{val.project_title}</td>
                        <td>{val.project_definition}</td>
                        <td>{val.project_description}</td>
                        <td>{val.techology_used}</td>
                        <td>{val.entry_date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Definitions;
