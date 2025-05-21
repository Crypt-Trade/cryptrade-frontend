import React, { useState } from 'react';
import axios from 'axios';
import Nav from "./Nav"
// import About from "./About"
// import Contact from './Contact';
import "../css/nav.css";
import "../css/service.css";
// import Service from './Service';
import "../css/home.css";
import abouticon from "../assets/images/bitcoin.png"
import "../css/about.css"
import wfh from "../assets/images/working.png"
import team from "../assets/images/team.png";
import appreciation from "../assets/images/appreciation.png";
import tele from "../assets/images/telephone.png"
import facebook from "../assets/images/facebook.png"
import twitter from "../assets/images/twitter.png"
import inta from "../assets/images/instragram.png"
import "../css/contact.css"
import logo from "../assets/images/crypto.png"
import backgroundVideo from "../assets/images/backvideo.mp4";

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    email: '',
    message: ''
  });
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  console.log(ROOT_URL);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const response = await axios.post(ROOT_URL+'/contact/contact-submit', formData); // update URL if needed
      setStatus('Inquiry submitted successfully!');
      setFormData({ name: '', phoneNo: '', email: '', message: '' });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setStatus(error.response.data.message);
      } else {
        setStatus('An error occurred. Please try again.');
      }
    }
  };
  return (
    <>
     {/* <Nav/> */}
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid ">
  <a className="navbar-brand" href="#">
  <img src={logo} className="logo-img" alt="Logo" />
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa fa-bars text-white"></i> 
    
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutcontainer">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#service-container">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/usersignup/verifysponsor" target='_blank'>Join us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login" target='_blank'>Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contactcontainer">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
     <div className="home-container">
     <video autoPlay loop muted playsInline>
    <source src={backgroundVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
     <div className='text-container'>
        <h1 className='text-white'>LEARN-TRADE-EARN</h1>
      </div>
     </div>
     
     <div className='mb-5'>
     <div className='aboutcontainer1'>
     <div className='container' id='aboutcontainer'>
           <div className='d-flex mt-4 flex-column align-items-center'>
           
             <img src={abouticon} width={250} alt="About Icon" />
             <h1 className='about mt-5 text-center text-white'>- ABOUT US -</h1>
           </div>
     
          <div className='row aboutrow d-flex justify-content-center mt-5'>
          <div className='col-12 col-md-6 col-lg-3 aboutcard mb-4 p-3'>
             <div className='text-center'>
                 <img src={wfh} width={80}/>
             </div>
             <div className=' mt-4 text-center fw-bold h5' style={{textAlign:"justify"}}>OUR TECHNOLOGY</div>
             <div style={{textAlign:"center"}}>
             We leverage cutting-edge blockchain technology to ensure secure, transparent trading experiences for our users.
             </div> 
             </div>
             <div className='col-12 col-md-6 col-lg-3 aboutcard mb-4 p-3'>
         <div className='text-center'>
                 <img src={team} width={70}/>
             </div>
         <div className='mt-4 text-center fw-bold h5' style={{textAlign:"justify"}}>TOGETHER WE GROW</div>
         <div style={{textAlign:"center"}}> Our team stands by you with care, guidance, and full support.
         </div></div>
         <div className='col-12 col-md-6 col-lg-3 aboutcard mb-4 p-3'>
         <div className='text-center'>
                 <img src={appreciation} width={70}/>
             </div>
         <div className=' mt-4 text-center fw-bold h5' style={{textAlign:"justify"}}> REWARDS</div>
         <div style={{textAlign:"center"}}>It delivers a powerful rewards program, offering traders exceptional benefits and earning potential across the globe.
         </div> </div>
        </div>
        </div>
     {/* <About /> */}
     </div>
     </div>
     <div className='pt-5'>
     <div className='service-container' id='service-container'>
      <div className='container py-5'>
      <h1 className='text-white fw-bold text-center'>- SERVICES -</h1>
      <div className="row g-4 mt-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title fw-bold">Advance cryptoknowledge</h5>
            <p className="card-text">Advanced cryptography involves secure algorithms, protocols, and cryptanalysis techniques to protect data, ensure privacy, and enable decentralized security solutions.</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title fw-bold">Subscribtion for premium</h5>
            <p className="card-text">Subscribe to premium for exclusive features, enhanced security, and advanced cryptographic insights.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title fw-bold">Meme coin checklist</h5>
            <p className="card-text">A meme coin checklist includes strong community support, viral potential, liquidity, security, and real-world utility.</p>
          </div>
        </div>
      </div>
      <div className="row g-4 mt-3">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title fw-bold">A future trading call</h5>
            <p className="card-text">A future trading call includes entry price, stop-loss, target levels, risk management, and market analysis.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title fw-bold">Portfolio management</h5>
            <p className="card-text">Portfolio management includes asset allocation, risk assessment, diversification, rebalancing, and performance tracking.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title fw-bold">Liquidation strategy</h5>
            <p className="card-text">A liquidation strategy includes risk assessment, stop-loss placement, margin monitoring, exit planning, and capital preservation.</p>
          </div>
        </div>
      </div>
      </div>
      </div>
     {/* <Service /> */}
     </div>
     <div className='pt-5'>
     <div className='container my-4' id='contactcontainer'>
                
                     <div className='text-center'>
                       <img src={tele} width={80} alt="Telephone Icon" />
                     </div>
                     <h1 className='about mt-3 text-center'>- CONTACT US -</h1>
                     <div className='row'>
                     <div className='col-lg-12 text-center mt-5'>
                         <div className=''>
                           {/* <h3 className='text-center'>- GET IN TOUCH -</h3> */}
                           <div className='d-flex mt-3 justify-content-center'>
                           <div>
                             <img src={facebook} width={40} className='ms-5' alt="Facebook" />
                             <img src={twitter} width={40} className='ms-5' alt="Twitter" />
                             <img src={inta} width={40} className='ms-5' alt="Instagram" />
                           </div>
                           </div>
                         </div>
                       </div>
                       <div className='col-lg-12  mt-5'>
                       <div className='d-flex justify-content-center'>
                         <div className='card formcontact w-75' style={{ maxWidth: '720px' }}>
                           <form className='p-4' onSubmit={handleSubmit}>
                             <div className="mb-3">
                               <label htmlFor="name" className="form-label">Name</label>
                               <input
                                 type="text"
                                 className="form-control p-2"
                                 id="name"
                                 name="name"
                                 value={formData.name}
                                 onChange={handleChange}
                                 required
                               />
                             </div>
                             <div className="mb-3">
                               <label htmlFor="phoneNo" className="form-label">Phone number</label>
                               <input
                                 type="tel"
                                 className="form-control p-2"
                                 id="phoneNo"
                                 name="phoneNo"
                                 value={formData.phoneNo}
                                 onChange={handleChange}
                                 required
                               />
                             </div>
                             <div className="mb-3">
                               <label htmlFor="email" className="form-label">Email</label>
                               <input
                                 type="email"
                                 className="form-control p-2"
                                 id="email"
                                 name="email"
                                 value={formData.email}
                                 onChange={handleChange}
                                 required
                               />
                             </div>
                             <div className="mb-3">
                               <label htmlFor="message" className="form-label">Message</label>
                               <textarea
                                 className="form-control p-2"
                                 id="message"
                                 name="message"
                                 rows="3"
                                 value={formData.message}
                                 onChange={handleChange}
                                 required
                               ></textarea>
                             </div>
                             <div className='text-center'>
                             <button type="submit" className="  btn btn-primary btn-lg w-50">Submit</button>
                             </div>
                             {status && <p className="mt-3 text-info">{status}</p>}
                           </form>
                         </div>
                       </div>
                       </div>
                       
                     </div>
                   </div>
     {/* <Contact /> */}
     </div>
     
    </>
   
  )
}

export default Home