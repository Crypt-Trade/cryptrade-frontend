import React from 'react'

const Topupheader = () => {
  return (
   <>
    <header className=" p-3 text-center" >
       <div className="d-flex justify-content-between align-items-center">
        {/* Centered Text */}
        <span className="mx-auto text-center fw-bold h3">Welcome To  Top-up Dashboard</span>

        {/* Logout Button (Aligned to Right) */}
       <a href='/topupdashboard/login/'> <button className="btn btn-primary ms-auto btn-lg">Logout</button></a>
      </div>
  </header>
   </>
  )
}

export default Topupheader