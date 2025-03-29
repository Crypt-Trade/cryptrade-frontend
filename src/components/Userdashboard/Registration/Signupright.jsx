import React , {useState} from 'react'
import { useParams, useNavigate} from "react-router-dom";
import axios from 'axios'
import swal from 'sweetalert';
const Signupright = () => {
  const { parentSponsorId } = useParams();
  const [formData, setFormData] = useState({
      sponsorId: parentSponsorId,
      name: "",
      mobileNumber: "",
      email: "",
      password: "",
    });
    
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const togglePassword = () => {
      setShowPassword(!showPassword);
    };
    console.log(parentSponsorId);
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
            const response = await axios.post(ROOT_URL+'/api/auth/register-user-right',formData)
            console.log('Left API Response:', response.data);
            swal("Thank You!", "Registration sucessfully completed!", "success");
            navigate('/userdashboard/genealogy');
          //   window.location.reload();
        
        
    } catch (error) {
        console.error('Error in binary position API:', error);
        swal('Error', error.response.data.message , 'error');
    }
    }
  }
  return (
  <>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "800px", width: "100%" }}>
        <h4 className="text-center mb-4 ">Registration Form</h4>
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
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
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

          <button type="submit" className="btn btn-primary w-25">
            Register
          </button>
        </form>
      </div>
    </div>
  </>
  )
}

export default Signupright