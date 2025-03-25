import React from 'react';
import tele from "../assets/images/telephone.png"
import facebook from "../assets/images/facebook.png"
import twitter from "../assets/images/twitter.png"
import inta from "../assets/images/instragram.png"
import "../css/contact.css"

const Contact = () => {
  return (
    <>
        <div className='container my-4'>
           
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
    </>
  )
}

export default Contact