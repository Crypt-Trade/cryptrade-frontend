import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/login.css"
const Login = () => {
  const navigate = useNavigate()
  const handlesubmit = () => {
    navigate("/userdashboard")
  }
  return (
    <div className='login-container'>
    <div className='container'>
    <div className='row'>
        
        <div className='col-lg-12 d-flex justify-content-center'>
        
        {/* <div className='d-flex flex-column'> */}
        {/* <h3 className='text-white'>Login here</h3> */}
        <div className='card w-50 logincard'>
        <form className='p-3'>
        <div className='fw-bold text-center loginhere h3'>Login here</div>
       <div className="mb-3">
         <label htmlFor="exampleInputEmail1" className="form-label">User ID</label>
         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        
       </div>
       <div class="mb-3">
         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
         <input type="password" className="form-control" id="exampleInputPassword1"/>
       </div>
       
       <div className='text-center'><button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button></div>
     </form>
        </div>
        </div>
        </div>
    </div>
        
    </div>
  
  )
}

export default Login