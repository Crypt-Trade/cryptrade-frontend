import React ,{useState} from 'react'

const Topupnavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
       <button
        className="btn btn-light d-md-none m-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
       
       <div className={`sidebar text-white  ${isOpen ? 'open' : ''}`} style={{ backgroundColor: "#E3E6EC", minHeight: "150vh" , padding: "7%"}}>
       <div className="d-flex justify-content-end align-items-center p-3 d-md-none">
          
          <button className="btn btn-sm btn-light" onClick={() => setIsOpen(false)}>
            ✖
          </button>
        </div>
      {/* <h4 className="text-center text-dark">Top-up dashboard</h4> */}

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
            <span className=" text-dark font-weight-normal ms-3">Customer subscription details</span>
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