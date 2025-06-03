import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import axios from "axios";
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import logo from "../assets/images/crypto.png"; // Ensure correct path

const Login = () => {
  const navigate = useNavigate();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  console.log(ROOT_URL);
  const [sponsorId, setSponsorId] = useState("");
  const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

  // const handleSubmit = (event) => {
    
  //   event.preventDefault(); // Prevent page reload

  //   if (!sponsorId || !password) {
  //     alert("Please fill in both fields.");
  //     return;
  //   }

  //   // Add authentication logic here (API call, localStorage, etc.)
  //   navigate("/userdashboard");
  // };
  const togglePassword = () =>{
    setShowPassword(!showPassword);
  }

   const handleSubmit = (event) => {
      event.preventDefault();
      if (sponsorId === "" || password === "") {
        alert("Please fill in both fields.");
      }
     
      else {
        axios.post(ROOT_URL+'/api/auth/login-user', { sponsorId, password })
          .then(res => {
            console.log(res);
            const {token : token} = res.data;
            const {_id : _id} = res.data.user;
            // const {_id : _id} = res.data.user;
            const {name : name} = res.data.user;
            const {mySponsorId : mySponsorId} = res.data.user;
            Swal.fire({
          title: 'Login Successful!',
          html: `
             <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_jbrw3hcz.json"
        background="transparent"
        speed="1"
        style="width: 200px; height: 200px;"
        autoplay
      ></lottie-player>
      <p style="margin-top: 10px; font-size: 28px;">Welcome to the Dashboard!</p>
    </div>
          `,
          showConfirmButton: false,
          timer: 3000,
        });
         
            sessionStorage.setItem('userid', _id);
            sessionStorage.setItem('username', name);
            sessionStorage.setItem('mySponsorId', mySponsorId);
            sessionStorage.setItem('token', token);
            
              navigate('/userdashboard');
          })
          .catch(err => {
            console.log(err);
            swal("Something went wrong", err.response.data.message , "error");
          })
      }
    }

  return (
    <div className="login-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column align-items-center">
            {/* Logo */}
            <img src={logo} style={{width:"230px"}} alt="Crypto Logo" className="logo-img mb-3 logoimage" />
            {/* Login Card */}
            <div className="card logincard  w-75" style={{ maxWidth: '720px' }}>
            <h3></h3>
              <form className="p-3" onSubmit={handleSubmit}>
               <div className='fw-bold text-center loginhere h3'>Login here</div>
                <div className="mb-3">
                  <label htmlFor="userId" className="form-label">User ID</label>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Enter your User ID"
                    id="userId"
                    value={sponsorId}
                    onChange={(e) => setSponsorId(e.target.value)}
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                     type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    className="form-control p-2"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                   <span className="position-absolute end-0 top-50 translate-middle-y me-3 mt-1" onClick={togglePassword} style={{ cursor: "pointer" }}>
              {showPassword ? <i className="fa fa-eye  mt-4" style={{fontSize:"20px"}}></i> : <i className="fa fa-eye-slash mt-4" style={{fontSize:"20px"}}></i>}
            </span>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn w-50 text-white" style={{backgroundColor:"#78266f"}}>Submit</button>
                </div>
                <div className="row mt-3">
                        <div className='col-md-6'>
                          </div>
                          <div className='col-md-6 text-end'>
                          <span className="mb-5 pb-lg-2 pb-sm-2">Don't  have an account? <a className="text-success text-decoration-none" href="/usersignup/verifysponsor"
                          >Signup</a></span>
                          </div>
                        </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
