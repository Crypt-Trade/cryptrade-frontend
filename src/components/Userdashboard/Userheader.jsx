import React from "react";

const Userheader = () => {
  const useId = sessionStorage.getItem('mySponsorId');
  return (
    <header className=" p-3 text-center">
      <div className="row">
        {/* Centered Text */}
        <div className="col-lg-10">
          <h2 className="mx-auto text-center ">Welcome To User Dashboard</h2>
          <h5 className="mx-auto text-center ">User ID: {useId}</h5>
        </div>
        {/* Logout Button (Aligned to Right) */}
        <div className="col-lg-2 text-end">
          <a href="/">
            {" "}
            <button className="btn btn-primary ms-auto btn-lg">Logout</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Userheader;
