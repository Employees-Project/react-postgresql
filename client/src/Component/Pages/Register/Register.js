import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [identityNo, setIdentityNo] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [position, setPosition] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [moo, setMoo] = useState("");
  const [street, setStreet] = useState("");
  const [disdrict, setDisdrict] = useState("");
  const [ambhur, setAmbhur] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  const addEmployee = (event) => {
    event.preventDefault();
    if (
      username === "" ||
      password === "" ||
      identityNo === "" ||
      jobPosition === "" ||
      position === "" ||
      employeeName === "" ||
      phoneNo === "" ||
      email === "" ||
      address === "" ||
      moo === "" ||
      street === "" ||
      disdrict === "" ||
      ambhur === "" ||
      province === "" ||
      zipCode === ""
    ) {
      console.log("Enter all information");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all field',
      })
    } else {
      Axios.post("http://localhost:3001/create", {
        username: username,
        password: password,
        identityNo: identityNo,
        jobPosition: jobPosition,
        position: position,
        employeeName: employeeName,
        phoneNo: phoneNo,
        email: email,
        address: address,
        moo: moo,
        street: street,
        disdrict: disdrict,
        ambhur: ambhur,
        province: province,
        zipCode: zipCode,
      });
      navigate("/login");
    }
  };

  return (
    <div className="form-container">
      <form className="form-signin row g-3">
        <div>
          <h2>?????????????????????????????????</h2>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="username">
            ???????????????????????????????????????:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            required
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="password">
            ????????????????????????:
          </label>
          <input
            type="password"
            className="form-control"
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="col-md-12">
          <label className="form-label" htmlFor="identityNo">
            ?????????????????????????????????????????????:
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => {
              setIdentityNo(event.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">??????????????????????????????:</label>
          <select
            className="form-select"
            htmlFor="jobPosition"
            required
            onChange={(event) => {
              setJobPosition(event.target.value);
            }}
          >
            <option>??????????????????????????????</option>
            <option>Devepoler</option>
            <option>System Analysis</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">?????????????????????:</label>
          <select
            className="form-select"
            htmlFor="position"
            required
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          >
            <option>??????????????????????????????</option>
            <option>??????????????????????????????????????????</option>
            <option>?????????????????????</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="employeeName">
            ???????????? - ?????????????????????:
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => {
              setEmployeeName(event.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="phoneNo">
            ????????????????????????:
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => {
              setPhoneNo(event.target.value);
            }}
          />
        </div>
        <div className="col-md-12">
          <label className="form-label" htmlFor="email">
            ???????????????:
          </label>
          <input
            type="email"
            className="form-control"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label" htmlFor="address">
            ??????????????????????????????:
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
        </div>
        <div className="col-md-1">
          <label className="form-label" htmlFor="moo">
            ????????????:
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => {
              setMoo(event.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label" htmlFor="street">
            ?????????:
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => {
              setStreet(event.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label" htmlFor="disdrict">
            ????????????/????????????:
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => {
              setDisdrict(event.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label" htmlFor="ambhur">
            ???????????????/?????????:
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => {
              setAmbhur(event.target.value);
            }}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label" htmlFor="province">
            ?????????????????????:
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => {
              setProvince(event.target.value);
            }}
          />
        </div>
        <div className="col-md-1">
          <label className="form-label" htmlFor="zipCode">
            ????????????????????????????????????:
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => {
              setZipCode(event.target.value);
            }}
          />
        </div>
        <button onClick={addEmployee} class="btn btn-success">
          Add Employee
        </button>
        <Link to="/">Have an account?</Link>
      </form>
    </div>
  );
}
