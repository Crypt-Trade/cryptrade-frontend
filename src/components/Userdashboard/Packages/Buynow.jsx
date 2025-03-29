import React ,{useState}from 'react'

function Buynow() {
      const [formData, setFormData] = useState({
        sponsorId: "",
        name: "",
        mobile: "",
        email: "",
        password: "",
      });
    
      const [showPassword, setShowPassword] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const togglePassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
      };
  return (
   <>
     <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "800px", width: "100%" }}>
        <h4 className="text-center mb-4 ">Fill this Form</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">User ID</label>
            <input
              type="text"
              className="form-control"
              name="sponsorId"
              value="123456"
              readOnly
              onChange={handleChange}
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
              name="mobile"
              value={formData.mobile}
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
          <div className="mb-3 position-relative">
            <label className="form-label">withdrawal password</label>
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
          <button type='submit' className="btn btn-primary w-25">Deposit</button>

          <button type="submit" className="btn btn-primary w-25">
            Submit
          </button>
        </form>
      </div>
    </div>
   </>
  )
}

export default Buynow