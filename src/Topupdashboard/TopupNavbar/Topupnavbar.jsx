import React from 'react'

const Topupnavbar = () => {
  return (
    <>
       <div className=" vh-100 p-4" style={{backgroundColor:"#E3E6EC"}}>
      <h4 className="text-center text-dark">Top-up dashboard</h4>

      <ul className="list-unstyled">
        <li><a href="/topupdashboard/home" className=" d-block pt-4 sidebaritem topupsidebar ">
        <div className='d-flex'>
            <div>🏠</div>
            <span className=" text-dark font-weight-normal ms-3">Dashboard</span>
        </div>
        </a></li>
        <li><a href="/topupdashboard/billing" className=" d-block pt-4 sidebaritem topupsidebar">
        <div className='d-flex'>
            <div><i className="fa fa-shopping-cart text-warning"></i></div>
            <span className=" text-dark font-weight-normal ms-3">Billing packages</span>
        </div>
         </a></li>
         <li><a href="/topupdashboard/customersubscription" className="text-white d-block pt-4 sidebaritem topupsidebar">
        <div className='d-flex'>
            <div>👤</div>
            <span className=" text-dark font-weight-normal ms-3">Customer subcription details</span>
        </div>
         </a></li>
         <li><a href="/topupdashboard/wallethistory" className="text-white d-block pt-4 sidebaritem topupsidebar">
        <div className='d-flex'>
            <div>📱</div>
            <span className=" text-dark font-weight-normal ms-3">Wallet history</span>
        </div></a></li> 
      </ul>
    </div>
    </>
  )
}

export default Topupnavbar