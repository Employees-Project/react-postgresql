import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./AdminEditEmployee.css";
import Swal from "sweetalert2";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

export default function AdminEditEmployee() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const [jobPosition, setJobPosition] = useState(data.jobposition);
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
  const [pic, setPic] = useState("");
  console.log(employeeName);

  function handleImage(event) {
    console.log(event.target.files);
    setPic(event.target.files[0]);
  }

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch(`http://localhost:3001/employee/${id}`).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setData(resp);
        setJobPosition(resp[0].jobposition);
        setPosition(resp[0].position);
        setEmployeeName(resp[0].employeename);
        setPhoneNo(resp[0].phoneno);
        setEmail(resp[0].email);
        setAddress(resp[0].address);
        setMoo(resp[0].moo);
        setStreet(resp[0].street);
        setDisdrict(resp[0].disdrict);
        setAmbhur(resp[0].ambhur);
        setProvince(resp[0].province);
        setZipCode(resp[0].zipcode);
        setPic(resp[0].pic);
      });
    });
  }
  // console.log(data);

  const navigate = useNavigate();

  const updateEmployee = (event) => {
    event.preventDefault();
    if (
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
        icon: "error",
        title: "?????????????????????????????????????????????????????????????????????",
        text: "???????????????????????????????????????????????????????????????",
      });
    } else if (
      jobPosition !== "" ||
      position !== "" ||
      employeeName !== "" ||
      phoneNo !== "" ||
      email !== "" ||
      address !== "" ||
      moo !== "" ||
      street !== "" ||
      disdrict !== "" ||
      ambhur !== "" ||
      province !== "" ||
      zipCode !== ""
    ) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "???????????????????????????????????????????????????",
        showConfirmButton: false,
        timer: 2500,
      });
      Axios.put(`http://localhost:3001/update/employee/${id}`, {
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
        pic: pic
      });
      navigate("/admin/employee");
    }
  };

  return (
    <>
      <AdminNavbar />
      <br />
      <div className="form-container1">
        <form className="form-signin row g-3">
          <div>
            <h2>????????????????????????????????????</h2>
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="employeeName">
              ???????????? - ?????????????????????:
            </label>
            <input
              type="text"
              className="form-control"
              value={employeeName}
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
              value={phoneNo}
              required
              onChange={(event) => {
                setPhoneNo(event.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">??????????????????????????????:</label>
            <select
              className="form-select"
              htmlFor="jobPosition"
              value={jobPosition}
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
              value={position}
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
          
          <div className="col-md-12">
            <label className="form-label" htmlFor="email">
              ???????????????:
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
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
              value={address}
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
              value={moo}
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
              value={street}
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
              value={disdrict}
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
              value={ambhur}
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
              value={province}
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
              value={zipCode}
              required
              onChange={(event) => {
                setZipCode(event.target.value);
              }}
            />
          </div>
          <div className="col-md-12">
            <label className="form-label" htmlFor="pic">
              ???????????????????????????????????????:
            </label>
            <input
              type="file"
              className="form-control"
              htmlFor="pic"
              requires
              onChange={handleImage}
            />
          </div>
          <button onClick={updateEmployee} className="btn btn-success">
            Update Employee
          </button>
        </form>
      </div>
    </>
  );
}
