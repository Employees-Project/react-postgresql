import React from "react";
import { useState } from "react";
import "./Style/Login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: inputs.username,
      password: inputs.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/login", requestOptions)
      .then((response) => response.json())
      .then((result, err) => {
        setData(result);
        console.log(result);
        if (result === "Active") {
          window.localStorage.setItem("isLoggedInAdmin", true);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "สวัสดี Admin",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/admin");
        } else if (result === "not Admin") {
          window.localStorage.setItem("isLoggedIn", true);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "สวัสดี HR",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/home");
        } else if (result === "Not Active") {
          Swal.fire({
            icon: "error",
            title: "ไม่สามารถเข้าสู่ระบบได้",
            text: "รหัสผู้ใช้งานนี้ถูกระงับโปรดติดต่อ HR",
          });
        } else if (inputs.username === "" && inputs.password === "") {
          Swal.fire({
            icon: "error",
            title: "ไม่สามารถเข้าสู่ระบบได้",
            text: "รหัสผู้ใช้งาน หรือ รหัสผ่าน ไม่ถูกต้อง",
          });
        }
      })
      // .catch((err) =>
      //   Swal.fire({
      //     icon: "error",
      //     title: "ไม่สามารถเข้าสู่ระบบได้",
      //     text: "รหัสผู้ใช้งาน หรือ รหัสผ่าน ไม่ถูกต้อง2",
      //   })
      // );

    console.log(inputs);
  };
  return (
    <div className="body">
      <div className="form-container">
        EMPLOYEE STORAGE SYSTEM PROTOSS TECHNOLOGY COMPANY LIMITED
        <br />
        ระบบจัดเก็บข้อมูลพนักงานบริษัท โปรทอส เทคโนโลยี จํากัด
      </div>
      <div className="form-containerhead">
        <form className="login" onSubmit={handleSubmit}>
          ลงชื่อเข้าใช้งาน
          <br />
          <div className="left">
            <label className="sr-only" htmlFor="username">
              รหัสผู้ใช้งาน
            </label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={inputs.username || ""}
              required
              onChange={handleChange}
            />
          </div>
          <div className="left">
            <label className="sr-only" htmlFor="password">
              รหัสผ่าน
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={inputs.password || ""}
              required
              onChange={handleChange}
            />
          </div>
          <button className="btnn btnn-primary btnn-block ">เข้าสู่ระบบ</button>
        </form>
      </div>
    </div>
  );
}