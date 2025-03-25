import React from 'react'
import Topupnavbar from "./TopupNavbar/Topupnavbar";
import Topupheader from './TopupHeader/Topupheader';
const Topupdashboardlayout = ({children}) => {
  return (
   <>
<div>
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 col-md-3 col-sm-4">
            <Topupnavbar />
          </div>
    
          {/* Main Content */}
          <div className="col-lg-9 col-md-9 col-sm-8">
          <Topupheader />
            <main>{children}</main>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-3 text-center bg-secondary text-white mt-4">
        Copyright © 2025 Synthosphere Technologies Pvt Ltd. All rights reserved.
      </footer>
   </>
  )
}

export default Topupdashboardlayout