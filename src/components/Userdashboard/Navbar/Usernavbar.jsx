import React, {useState}from 'react'
import "../../../css/userdashboard/usernavbar.css"
import  logo from "../../../assets/images/crypto.png";
const Usernavbar = () => {
   

  return (
    <>
   <div className="text-white vh-100 " style={{backgroundColor:"#004d93"}}>
      <a className="navbar-brand ms-3" href="/">
        <img src={logo} className="logo-img" alt="Logo" />
      </a>

      <ul className="list-unstyled p-3">
        <li><a href="/userdashboard" className="text-white d-block pt-4 sidebaritem ">
        <div className='d-flex'>
            <div>🏠</div>
            <span className="font-weight-normal ms-3">Home</span>
        </div>
        </a></li>
        <li><a href="/userdashboard/welcome" className="text-white d-block pt-4 sidebaritem">
        <div className='d-flex'>
            <div>🙏</div>
            <span className="font-weight-normal ms-3">Welcome</span>
        </div>
         </a></li>
         <li><a href="/userdashboard/packages" className="text-white d-block pt-4 sidebaritem">
        <div className='d-flex'>
            <div>📦</div>
            <span className="font-weight-normal ms-3">All packages</span>
        </div>
         </a></li>
         <li><a href="/userdashboard/register" className="text-white d-block pt-4 sidebaritem">
        <div className='d-flex'>
            <div>🧑‍💼</div>
            <span className="font-weight-normal ms-3">Registration</span>
        </div>
         </a></li>
         <li><a href="/userdashboard/ewallet" className="text-white d-block pt-4 sidebaritem">
        <div className='d-flex'>
            <div>📱</div>
            <span className="font-weight-normal ms-3">E-Wallet</span>
        </div></a></li>
        <li><a href="/userdashboard/reports" className="text-white d-block pt-4 sidebaritem">
        <div className='d-flex'>
            <div>📊</div>
            <span className="font-weight-normal ms-3">Reports</span>
        </div></a></li>
        <li><a href="/userdashboard/genealogy" className="text-white d-block pt-4 sidebaritem">
        <div className='d-flex'>
            <div>🌳</div>
            <span className="font-weight-normal ms-3">Geneology tree</span>
        </div></a></li>
        <li><a href="/userdashboard/directaffilate" className="text-white d-block pt-4 sidebaritem">
        <div className='d-flex'>
            <div>🤝</div>
            <span className="font-weight-normal ms-3">Direct affiliate</span>
        </div></a></li>
        <li><a href="/userdashboard/weeklypayout" className="text-white d-block pt-4 sidebaritem">
        <div className='d-flex'>
            <div>💲</div>
            <span className="font-weight-normal ms-3">Weekly payout</span>
        </div></a></li>
        
       
        
      </ul>
    </div>
    </>
  )
}

export default Usernavbar