import React from 'react'

const Userheader = () => {
  return (
    <header className=" p-3 text-center" >
       <div className="d-flex justify-content-between align-items-center">
        {/* Centered Text */}
        <h3 className="mx-auto text-center fw-bold">Welcome To User Dashboard</h3>

        {/* Logout Button (Aligned to Right) */}
       <a href='/'> <button className="btn btn-primary ms-auto btn-lg">Logout</button></a>
      </div>
  </header>
  )
}

export default Userheader