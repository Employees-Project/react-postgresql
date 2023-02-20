import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <AdminNavbar />
      <div className="container">
        <br />
        <div className="row">
        <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">จำนวนพนักงานที่ลงชื่อเข้างาน</h4>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <h2 className="card-title">
                    21 / <b><b>30</b></b>
                  </h2>
                </div>
                {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <Link to={"/admin/editleave/"} class="btn btn-warning ">แก้ไขเกณฑ์การลา</Link>
                  </div> */}
              </div>
            </div>
            <br />
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">จำนวนพนักงานที่ลงชื่อออกงาน</h4>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <h2 className="card-title">
                    15 / <b><b>30</b></b>
                  </h2>
                </div>
                {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <Link to={"/admin/editleave/"} class="btn btn-warning ">แก้ไขเกณฑ์การลา</Link>
                  </div> */}
              </div>
            </div>
            <br />
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">จำนวนพนักงานที่ลางาน</h4>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <h2 className="card-title">
                    30 / <b><b>30</b></b>
                  </h2>
                </div>
                {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <Link to={"/admin/editleave/"} class="btn btn-warning ">แก้ไขเกณฑ์การลา</Link>
                  </div> */}
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
