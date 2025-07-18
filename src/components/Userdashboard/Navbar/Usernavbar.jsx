import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../../../css/userdashboard/usernavbar.css";
import logo from "../../../assets/images/crypto.png";

const Usernavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <button className="btn btn-light d-md-none m-2" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`sidebar text-white ${isOpen ? 'open' : ''}`} style={{ backgroundColor: "#004d93", minHeight: "150vh" }}>
        <div className="d-flex justify-content-end align-items-center p-3 d-md-none">
          <button className="btn btn-sm btn-light" onClick={() => setIsOpen(false)}>✖</button>
        </div>

        <Link className="navbar-brand ms-3 text-center" to="/">
          <img src={logo} className="logo-img text-center" width={150} alt="Logo" />
        </Link>

        <ul className="list-unstyled p-3">
          <li>
            <Link to="/userdashboard" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div>🏠</div>
                <span className="font-weight-normal ms-3">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/welcome" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/welcome") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div>🙏</div>
                <span className="font-weight-normal ms-3">Welcome</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/packages" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/packages") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div>📦</div>
                <span className="font-weight-normal ms-3">All packages</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/walletdetails" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/walletdetails") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div>💲</div>
                <span className="font-weight-normal ms-3">Wallet details</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/register" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/register") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div>🧑‍💼</div>
                <span className="font-weight-normal ms-3">Registration</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/ewallet" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/ewallet") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div>📱</div>
                <span className="font-weight-normal ms-3">E-Wallet</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/reports" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/reports") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div>📊</div>
                <span className="font-weight-normal ms-3">Reports</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/genealogy" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/genealogy") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div>🌳</div>
                <span className="font-weight-normal ms-3">Geneology tree</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/directaffilate" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/directaffilate") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div>🤝</div>
                <span className="font-weight-normal ms-3">Direct affiliate</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/weeklypayout" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/weeklypayout") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div>💲</div>
                <span className="font-weight-normal ms-3">Weekly payout</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/scholarship" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/scholarship") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div><i className='fa fa-book'></i></div>
                <span className="font-weight-normal ms-3">Scholarship</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/withdrawalscholarship" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/withdrawalscholarship") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div><i className='fa fa-money'></i></div>
                <span className="font-weight-normal ms-3">Withdrawal</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/rewards" className={`text-white d-block py-2 sidebaritem ${isActive("/userdashboard/rewards") ? "active-sidebar-item" : ""}`}>
              <div className='d-flex'>
                <div><i className='fa fa-trophy' style={{ color: "gold" }}></i></div>
                <span className="font-weight-normal ms-3">Rewards</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Usernavbar;
