import React from 'react'
import abouticon from "../assets/images/about.png"
import "../css/about.css"
import wfh from "../assets/images/working.png"
import team from "../assets/images/team.png";
import appreciation from "../assets/images/appreciation.png";
const About = () => {
  return (
   <>
   <div className='container'>
      <div className='d-flex mt-4 flex-column align-items-center'>
      <h1 className='about mt-3 text-center'>- ABOUT US -</h1>
        <img src={abouticon} width={100} alt="About Icon" />
       
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
   {/* <div className='container'>
   <div className='d-flex  mt-4 flex-column '>
   <div className='text-center'>
   <img  src={abouticon} width={100}/>
   </div>
   <h1 className='about mt-3 text-center'>- ABOUT US-</h1>
   </div>
   </div> */}
  
   {/* <div className='row w-100'>
    <div className='col-lg-4 aboutcard ms-1 p-1'>
        <div className='text-center'>
            <img src={wfh} width={70}/>
        </div>
        <div className=' mt-4 text-center fw-bold h5' style={{textAlign:"justify"}}>WORK FROM HOME</div>
        <div style={{textAlign:"center"}}>Flexi Trade offers you to work from home. If you have 2-4 hours after your job then you can work with us. and earn a lot. 
        </div>
        
        </div>
    <div className='col-lg-4 aboutcard ms-1'>
    <div className='text-center'>
            <img src={team} width={70}/>
        </div>
    <div className='mt-4 text-center fw-bold h5' style={{textAlign:"justify"}}>WORK IN A TEAM</div>
    <div style={{textAlign:"center"}}> All Tr Members are working as a family. All the time they are ready to help/ support you..
    </div></div>
    <div className='col-lg-4 aboutcard'>
    <div className='text-center'>
            <img src={appreciation} width={70}/>
        </div>
    <div className=' mt-4 text-center fw-bold h5' style={{textAlign:"justify"}}> REWARDS</div>
    <div style={{textAlign:"center"}}>Flexi Trade offers one of the most generous rewards  programs in the direct-selling industry in World.
    </div> </div>
   </div> */}
   </>
  )
}

export default About