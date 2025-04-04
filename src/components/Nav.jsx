import React from 'react'
import "../css/nav.css";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid ">
    {/* <a className="navbar-brand"><img src={logo}/></a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/service">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Join us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav