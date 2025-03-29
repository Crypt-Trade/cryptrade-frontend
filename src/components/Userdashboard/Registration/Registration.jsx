import React , {useState} from 'react'
import axios from 'axios';
import swal from 'sweetalert';

const Registration = () => {
  const sponsorId = sessionStorage.getItem("mySponsorId");
  const [formData, setFormData] = useState({
    sponsorId: sponsorId,
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
  });
  
const [binaryposition, setbinaryposition] = useState();
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange_radiobutton = (event) => {
    setbinaryposition(event.target.value);
  };
  const handleSubmit = async (event) => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    event.preventDefault();
    if (!binaryposition || !formData.mobileNumber || !formData.email || !formData.password) {
      swal("Opps!", "Please fill out all required fields!", "error");
     
    }
  
    //  alert("sumit")
    else{
    try {
      if (binaryposition === 'left') {
          // API call for left position
          const response = await axios.post(ROOT_URL+'/api/auth/register-user-left',formData)
          console.log('Left API Response:', response.data);
          swal("Thank You!", "Registration sucessfully completed!", "success");
          window.location.reload();
      } else if (binaryposition === 'right') {
          // API call for right position
          const response = await axios.post(ROOT_URL+'/api/auth/register-user-right', formData);
          console.log('Right API Response:', response.data);
          swal("Thank You!", "Registration sucessfully completed!", "success");
          window.location.reload();
      }
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
              value={formData.sponsorId}
              readOnly
              
              required
            />
          </div>
          <div className="mb-3 row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-3 col-form-label"
                    >
                      Position:
                    </label>
                  <div className="col-sm-9 mt-2">
                      <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="inlineRadio5">
                          Left
                        <input
                          className="form-check-input"
                          type="radio"
                          
                          id="inlineRadio5"
                          value="left"
                          checked={binaryposition === 'left'}
          onChange={handleChange_radiobutton}
                        />
                        
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="inlineRadio4">
                      Right
                        <input
                          className="form-check-input"
                          type="radio"
                        
                          id="inlineRadio4"
                          value="right"
                          checked={binaryposition === 'right'}
                          onChange={handleChange_radiobutton}
                        />
                        </label>
                      </div>
                    </div>
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

export default Registration