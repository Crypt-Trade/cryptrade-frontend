import React from "react";

const Userheader = () => {
  const useId = sessionStorage.getItem('mySponsorId');
  const username = sessionStorage.getItem('username');

  const handle_logout = () => {
    sessionStorage.removeItem('mySponsorId');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('wallet_Balance');
    window.location.href = '/';
  }
  return (
    <header className=" p-3 text-center">
      <div className="row">
        {/* Centered Text */}
        <div className="col-lg-10">
          <h2 className="mx-auto text-center ">Hi! {username}, Welcome To Dashboard</h2>
          <h5 className="mx-auto text-center ">User ID: {useId}</h5>
          
        </div>
        {/* Logout Button (Aligned to Right) */}
        <div className="col-lg-2 text-end">
         
            <button className="btn btn-primary ms-auto btn-lg">Logout</button>
          
        </div>
      </div>
    </header>
  );
};

export default Userheader;
