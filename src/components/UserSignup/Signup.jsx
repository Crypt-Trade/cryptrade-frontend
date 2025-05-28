import React , {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios'
import swal from 'sweetalert';
const Signup = () => {
    const navigate = useNavigate();
    const parentSponsorId = sessionStorage.getItem("sponosoridforregistration")
    const [formData, setFormData] = useState({
          sponsorId: parentSponsorId,
          name: "",
          mobileNumber: "",
          email: "",
          password: "",
        });
         const [showPassword, setShowPassword] = useState(false);
         const [mobilenoerror, setmobileerror] = useState(false);
         const [emailerror, setemailerror] = useState(false)
    const togglePassword = () => {
        setShowPassword(!showPassword);
      };
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      function mobileHandler(e) {
        let item = e.target.value;
        if (item.length != 10) {
            setmobileerror(true)
        } else {
            setmobileerror(false)
        }
      }
      function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
      function emailHandler(e) {
        let item = e.target.value;
        if (!isValidEmail(item)) {
            setemailerror(true);
        } else {
            setemailerror(false);
        }
      }
       const handleSubmit = async (event) => {
            const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
            event.preventDefault();
            if (!formData.name|| !formData.mobileNumber || !formData.email || !formData.password) {
              swal("Opps!", "Please fill out all required fields!", "error");
             
            }
          
            //  alert("sumit")
            else{
            try {
             
                  // API call for left position
                  const response = await axios.post(ROOT_URL+'/api/auth/register-user',formData)
                  console.log('Left API Response:', response.data);
                  swal("Thank You!", "Registration sucessfully completed!", "success");
                  navigate('/login');
                //   window.location.reload();
              
              
          } catch (error) {
              console.error('Error in binary position API:', error);
              swal('Error', error.response.data.message , 'error');
          }
          }
        }
  return (
    <>
        <div className="login-container">
             
             
        <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "800px", width: "100%" }}>
        <h4 className="text-center mb-4 ">Fill the form</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Sponsor ID</label>
            <input
              type="text"
              className="form-control"
              name="sponsorId"
              value={parentSponsorId}
              readOnly
              required
            />
          </div>
        
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              onKeyUp={mobileHandler}
              required
            />
             {mobilenoerror ? <span className='link-danger'>phone no invalid</span> : ""}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
             
              onChange={handleChange}
              onKeyUp={emailHandler}
              required
            />
             {emailerror ? <span className='link-danger'>Email invalid</span> : ""}
          </div>

          <div className="mb-3 position-relative">
            <label className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="position-absolute end-0 top-50 translate-middle-y me-3" onClick={togglePassword} style={{ cursor: "pointer" }}>
              {showPassword ? <i className="fa fa-eye-slash mt-4" style={{fontSize:"20px"}}></i> : <i className="fa fa-eye mt-4" style={{fontSize:"20px"}}></i>}
            </span>
          </div>
          <div className='text-center'> <button type="submit" className="btn  text-center text-white" style={{width:"27%" , backgroundColor:"#78266f"}}>
            Register
          </button></div>
         
        </form>
      </div>
    </div>
              </div>
    </>
  )
}

export default Signup