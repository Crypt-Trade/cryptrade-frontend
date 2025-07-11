import React, {useState}from 'react'
import "../../../css/userdashboard/usernavbar.css"
import  logo from "../../../assets/images/crypto.png";
const Usernavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  
  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // Update active item
  };

  return (
    <>
    <button
        className="btn btn-light d-md-none m-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <div className={`sidebar text-white  ${isOpen ? 'open' : ''}`} style={{ backgroundColor: "#004d93", minHeight: "150vh" }}>
      <div className="d-flex justify-content-end align-items-center p-3 d-md-none">
          {/* <img src={logo} className="logo-img" alt="Logo" /> */}
          <button className="btn btn-sm btn-light" onClick={() => setIsOpen(false)}>
            ✖
          </button>
        </div>
   
      <a className="navbar-brand ms-3 text-center" href="/">
        <img src={logo} className="logo-img text-center" width={150} alt="Logo" />
      </a>

      <ul className="list-unstyled p-3">
        <li><a href="/userdashboard" className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard" ? "active-sidebar-item" : ""
    } text-white`}  >
        <div className='d-flex'>
            <div>🏠</div>
            <span className="font-weight-normal ms-3">Home</span>
        </div>
        </a></li>
        <li><a href="/userdashboard/welcome" className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard/welcome" ? "active-sidebar-item" : ""
    } text-white`}>
        <div className='d-flex'>
            <div>🙏</div>
            <span className="font-weight-normal ms-3">Welcome</span>
        </div>
         </a></li>
         <li><a href="/userdashboard/packages"  className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard/packages" ? "active-sidebar-item" : ""
    } text-white`}>
        <div className='d-flex'>
            <div>📦</div>
            <span className="font-weight-normal ms-3">All packages</span>
        </div>
         </a></li>
         <li><a href="/userdashboard/walletdetails"  className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard/walletdetails" ? "active-sidebar-item" : ""
    } text-white`}>
        <div className='d-flex'>
            <div>💲</div>
            <span className="font-weight-normal ms-3">Wallet details</span>
        </div>
         </a></li>
         <li><a href="/userdashboard/register"  className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard/register" ? "active-sidebar-item" : ""
    } text-white`}>
        <div className='d-flex'>
            <div>🧑‍💼</div>
            <span className="font-weight-normal ms-3">Registration</span>
        </div>
         </a></li>
         <li><a href="/userdashboard/ewallet"  className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard/ewallet" ? "active-sidebar-item" : ""
    } text-white`}>
        <div className='d-flex'>
            <div>📱</div>
            <span className="font-weight-normal ms-3">E-Wallet</span>
        </div></a></li>
        <li><a href="/userdashboard/reports"  className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard/reports" ? "active-sidebar-item" : ""
    } text-white`}>
        <div className='d-flex'>
            <div>📊</div>
            <span className="font-weight-normal ms-3">Reports</span>
        </div></a></li>
        <li><a href="/userdashboard/genealogy"  className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard/genealogy" ? "active-sidebar-item" : ""
    } text-white`}>
        <div className='d-flex'>
            <div>🌳</div>
            <span className="font-weight-normal ms-3">Genealogy tree</span>
        </div></a></li>
        <li><a href="/userdashboard/directaffilate"  className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard/directaffilate" ? "active-sidebar-item" : ""
    } text-white`}>
        <div className='d-flex'>
            <div>🤝</div>
            <span className="font-weight-normal ms-3">Direct affiliate</span>
        </div></a></li>
        <li>
        <a href="/userdashboard/weeklypayout"  className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard/weeklypayout" ? "active-sidebar-item" : ""
    } text-white`}>
        <div className='d-flex'>
            <div>💲</div>
            <span className="font-weight-normal ms-3">Weekly payout</span>
        </div></a></li>
         <li>
        <a href="/userdashboard/scholarship"  className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard/scholarship" ? "active-sidebar-item" : ""
    } text-white`}>
        <div className='d-flex'>
            <div><i className='fa fa-book'></i></div>
            <span className="font-weight-normal ms-3">Scholarship</span>
        </div></a></li>
         <li>
        <a href="/userdashboard/rewards"  className={`d-block py-2 sidebaritem ${
      window.location.pathname === "/userdashboard/rewards" ? "active-sidebar-item" : ""
    } text-white`}>
        <div className='d-flex'>
            <div><i className='fa fa-trophy' style={{color:"gold"}}></i></div>
            <span className="font-weight-normal ms-3">Rewards</span>
        </div></a></li>
        {/* <li className='mt-2'>
        <div className="col-lg-2 text-center">
         
         <button className="btn btn-primary ms-auto btn-lg w-100" onClick={handle_logout}>Logout</button>
       
     </div>
     </li> */}
       
        
      </ul>
    </div>
    </>
  )
}

export default Usernavbar