import React,{useState} from 'react'
// import pic from '../../../assets/images/signup.png'
import axios from 'axios';
// import Nav from "../Nav";
import logo from "../../assets/images/crypto.png"; 
import { useNavigate } from 'react-router-dom';
const Verifysponsor = () => {
   
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const navigate = useNavigate();
  const [name, setSponsorname] = useState('')
  const [sponsorId, setSponsorid] = useState('')

  

  const handleverify = async (event) => {
    event.preventDefault();
    await axios.post(ROOT_URL+'/api/auth/verify-sponsor', {sponsorId })
            .then(res => {
                console.log(res);

                setSponsorname(res.data.sponsor.name);
               
                
            })
            .catch(err => {
                console.log(err);
                swal("Error!", err.response.data.message || 'Error registering user', "error");
               

            })
  }
  const handleSubmit = async (event) => {
    if(name === "" || sponsorId === ""){
      event.preventDefault();
      swal("Opps!", "Please fill out all required fields!", "error");
    }
    else {
    sessionStorage.setItem('sponosoridforregistration', sponsorId);
    navigate('/usersignup/Signup');
    }
    
  
 
  }


 
  return (
  <>
  {/* <Nav /> */}
  <div className="login-container">
     
     
        <div className="container py-5">
        <div className="row">
        <div className="col-lg-12 d-flex flex-column align-items-center">
             <img src={logo} style={{width:"230px"}} alt="Crypto Logo" className="logo-img mb-3 logoimage" />
              <div className="card w-50 logincard" > 
                <div className="row">
                  
                  <div className="col-md-12 col-lg-12 d-flex">
                    <div className="card-body p-4  text-black">

                      <form>

                        <div className="d-flex mb-3 pb-1 justify-content-center ">
                          <span className="h1 fw-bold mb-0">Signup here</span>
                        </div>
                        <div className="form-group mb-4">

                          <label className="mb-1 mt-3" htmlFor="exampleInputEmail1" style={{fontSize:"15px"}}>SponsorID</label>
                          <div className='d-flex'>
                          <input type="text" className="form-control w-75 p-2" id="id" name='id'  placeholder="Entersponsorid" onChange={e => setSponsorid(e.target.value)} />
                          <button className='btn btn-primary ms-4 w-25' onClick={handleverify}>Verify</button>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="mb-1" htmlFor="exampleInputEmail1">Sponsor Name</label>
                          <input type="text" className="form-control p-2 " id="name" name='name' readOnly
                            placeholder="Enter Your Name" value={name} />
                        </div>
                        
                     
                        

                        <div className="pt-1 mb-4 text-center">
                          <button className="btn btn-primary w-50" type="submit"  onClick={handleSubmit}>Signup</button>
                        </div>
                        <div className="row">
                        <div className='col-md-6'>
                          </div>
                          <div className='col-md-6 text-end'>
                          <span className="mb-5 pb-lg-2 pb-sm-2"> have an account? <a className="text-success text-decoration-none" href="/login"
                          >Login</a></span>
                          </div>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
         
      </div>
      </div>
      </div>
   </>
  )
}

export default Verifysponsor