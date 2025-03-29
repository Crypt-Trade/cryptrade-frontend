import React from 'react';
import Userheader from "../Userdashboard/Userheader";
import Usernavbar from './Navbar/Usernavbar';
const Dashboard = ({children}) => {
  return (
    <>
       
      <div>
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-2 col-md-3 col-sm-4">
            <Usernavbar />
          </div>
    
          {/* Main Content */}
          <div className="col-lg-10 col-md-9 col-sm-8">
          <Userheader />
            <main>{children}</main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-3 text-center bg-secondary text-white ">
        Copyright © 2025 Synthosphere Technologies Pvt Ltd. All rights reserved.
      </footer>
    </>
  )
}

export default Dashboard