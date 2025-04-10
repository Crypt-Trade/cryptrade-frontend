import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import axios from "axios";
import logo from "../assets/images/crypto.png"; // Ensure correct path

const Login = () => {
  const navigate = useNavigate();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  console.log(ROOT_URL);
  const [sponsorId, setSponsorId] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Prevent page reload

  //   if (!sponsorId || !password) {
  //     alert("Please fill in both fields.");
  //     return;
  //   }

  //   // Add authentication logic here (API call, localStorage, etc.)
  //   navigate("/userdashboard");
  // };
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
            swal("Yeah", "Login Successful!!", "success");
         
            sessionStorage.setItem('userid', _id);
            sessionStorage.setItem('username', name);
            sessionStorage.setItem('mySponsorId', mySponsorId);
            sessionStorage.setItem('token', token);
            
              navigate('/userdashboard');
              
           
  
          })
          .catch(err => {
            console.log(err);
            swal("Opps", err.response.data.message , "error");
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
            <div className="card w-50 logincard">
            <h3></h3>
              <form className="p-3" onSubmit={handleSubmit}>
               <div className='fw-bold text-center loginhere h3'>Login here</div>
                <div className="mb-3">
                  <label htmlFor="userId" className="form-label">User ID</label>
                  <input
                    type="text"
                    className="form-control p-2"
                    id="userId"
                    value={sponsorId}
                    onChange={(e) => setSponsorId(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control p-2"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <div className="row">
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
