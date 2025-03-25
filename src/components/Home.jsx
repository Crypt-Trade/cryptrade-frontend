import React from 'react'
import Nav from "./Nav"
// import About from "./About"
// import Contact from './Contact';
import "../css/nav.css";
import "../css/service.css";
// import Service from './Service';
import "../css/home.css";
import abouticon from "../assets/images/about.png"
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

const Home = () => {
  return (
    <>
     {/* <Nav/> */}
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#"><img src={logo} width={100}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
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
     <div className='text-container'>
        <h1 className='text-white'>GROW WITH US</h1>
      </div>
     </div>
     
     <div className='my-5'>
     <div className='container' id='aboutcontainer'>
           <div className='d-flex mt-4 flex-column align-items-center'>
           
             <img src={abouticon} width={100} alt="About Icon" />
             <h1 className='about mt-3 text-center'>- ABOUT US -</h1>
           </div>
     
          <div className='row aboutrow d-flex justify-content-center'>
         <div className='col-md-3 aboutcard ms-1 p-3'>
             <div className='text-center'>
                 <img src={wfh} width={70}/>
             </div>
             <div className=' mt-4 text-center fw-bold h5' style={{textAlign:"justify"}}>WORK FROM HOME</div>
             <div style={{textAlign:"center"}}>Flexi Trade offers you to work from home. If you have 2-4 hours after your job then you can work with us. and earn a lot. 
             </div>
             
             </div>
         <div className='col-lg-3 aboutcard ms-1 p-3'>
         <div className='text-center'>
                 <img src={team} width={70}/>
             </div>
         <div className='mt-4 text-center fw-bold h5' style={{textAlign:"justify"}}>WORK IN A TEAM</div>
         <div style={{textAlign:"center"}}> All Tr Members are working as a family. All the time they are ready to help/ support you..
         </div></div>
         <div className='col-lg-3 aboutcard p-3'>
         <div className='text-center'>
                 <img src={appreciation} width={70}/>
             </div>
         <div className=' mt-4 text-center fw-bold h5' style={{textAlign:"justify"}}> REWARDS</div>
         <div style={{textAlign:"center"}}>Flexi Trade offers one of the most generous rewards  programs in the direct-selling industry in World.
         </div> </div>
        </div>
        </div>
     {/* <About /> */}
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
                <img  src={tele} width={80}/>
                </div>
                <h1 className='about mt-3 text-center'>- CONTACT US-</h1>
                <div className='row'>
                <div className='col-lg-6 mt-5'>
                 <div className='card formcontact'>
                 <form className='p-3 '>
       <div className="mb-3">
         <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        
       </div>
       <div class="mb-3">
         <label htmlFor="exampleInputPassword1" className="form-label">Phone number</label>
         <input type="password" className="form-control" id="exampleInputPassword1"/>
       </div>
       <div class="mb-3">
         <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
         <input type="password" className="form-control" id="exampleInputPassword1"/>
       </div>
       <div class="mb-3">
         <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
         <input type="password" className="form-control" id="exampleInputPassword1"/>
       </div>
       <button type="submit" className="btn btn-primary">Submit</button>
     </form>
     </div>
                 </div>
                 <div className='col-lg-6 text-center mt-5'>
                     <div className='geincontact'>
                     <h3 className='text-center'>- GET IN TOUCH -</h3>
                     <div className='d-flex mt-3 justify-content-center '>
                     <img src={facebook} width={40} className='ms-5'  />
                     <img src={twitter} width={40} className='ms-5' />
                     <img src={inta}  width={40} className='ms-5'/>
                    
     
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