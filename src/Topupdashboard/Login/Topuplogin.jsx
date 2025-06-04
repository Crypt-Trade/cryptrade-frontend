import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import logo from "../../assets/images/crypto.png"; // Ensure correct path

const Topuplogin = () => {
    const navigate = useNavigate();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  console.log(ROOT_URL);
  const [email, setSponsorId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill in both fields.");
    }
   
    else {
      axios.post(ROOT_URL+'/topup/login', { email, password })
        .then(res => {
          console.log(res.data);
          let  token = res.data.token;
          // const {_id : _id} = res.data.user;
          // const {_id : _id} = res.data.user;
          // const {name : name} = res.data.user;
          // const {mySponsorId : mySponsorId} = res.data.user;
          swal("Successfull", "Login Successful!!", "success");
       
          // sessionStorage.setItem('userid', _id);
          // sessionStorage.setItem('username', name);
          // sessionStorage.setItem('mySponsorId', mySponsorId);
          sessionStorage.setItem('token', token);
          
            navigate('/topupdashboard/home');
            
         

        })
        .catch(err => {
          console.log(err);
          swal("Opps", err.response.data.message , "error");
        })
    }
  }

  return (
    <>
         <div className="login-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 d-flex flex-column align-items-center">
                    {/* Logo */}
                    <img src={logo} style={{width:"230px"}} alt="Crypto Logo" className="logo-img mb-3 logoimage" />
                   {/* <h3 className="logoimage"> Top-up Dashboard Login</h3> */}
                    {/* Login Card */}
                    <div className="card logincard w-75" style={{ maxWidth: '720px' }}>
                    <h3></h3>
                      <form className="p-3" onSubmit={handleSubmit}>
                       <div className='fw-bold text-center loginhere h3 mb-2'>Top-up Login </div>
                        <div className="mb-3">
                          <label htmlFor="userId" className="form-label">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            id="userId"
                            value={email}
                            onChange={(e) => setSponsorId(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary ">Submit</button>
                        </div>
                        {/* <div className="row">
                                <div className='col-md-6'>
                                  </div>
                                  <div className='col-md-6 text-end'>
                                  <span className="mb-5 pb-lg-2 pb-sm-2">Don't  have an account? <a className="text-success text-decoration-none" href="/usersignup/verifysponsor"
                                  >Signup</a></span>
                                  </div>
                                </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Topuplogin