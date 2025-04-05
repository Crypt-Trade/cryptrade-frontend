import React from "react";
import "../../css/userdashboard/homepage.css";
const Homepage = () => {
  return (
    <>
      <div className="row p-2">
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              {/* <img src={pic} className="card-img-absolute" alt="circle-image"  /> */}
              <h4 className="font-weight-normal mb-3">
                User status
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              <span className="mb-5 h5">Active</span>
            </div>
          </div>
        </div>

        <div className="col-md-4 stretch-card grid-margin">
          <div className="card  card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              {/* <img src={pic1} className="card-img-absolute" alt="circle-image" /> */}
              <h4 className="font-weight-normal mb-3">
                Wallet balance($)
                <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
              <h2 className="mb-5"></h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              {/* <img src={pic2} className="card-img-absolute" alt="circle-image" /> */}
              <h4 className="font-weight-normal mb-3">
                Direct Affiliate Bonus(D.A.B)
                <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
              <h2 className="mb-5">1000</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1 ">
            <div className="card-body">
              {/* <img src={pic} className="card-img-absolute" alt="circle-image"  /> */}
              <h4 className="font-weight-normal mb-3">
                Team Affiliate Bonus{" "}
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              <h2 className="mb-5">1000</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 stretch-card grid-margin">
          <div className="card  card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              {/* <img src={pic1} className="card-img-absolute" alt="circle-image" /> */}
              <h4 className="font-weight-normal mb-3">
                Withdraw status
                <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
              <h2 className="mb-5"></h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              {/* <img src={pic2} className="card-img-absolute" alt="circle-image" /> */}
              <h4 className="font-weight-normal mb-3">Available stock</h4>
              <h2 className="mb-5">₹</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="d-flex justify-content-center">
      <div className="h5 text-center fw-bold">Left link:-
      </div>
      <div className="h5 text-center fw-bold"> 10 USDT</div>
      </div> */}
      {/* <div className="d-flex justify-content-center">
      <div className="h5 text-center fw-bold">Right link:-
      </div>
      <div className="h5 text-center fw-bold"> 10 USDT</div>
      </div> */}
      <div className="d-flex justify-content-center">
      <div className="h5 text-center fw-bold">Minimum Withdraw:-
      </div>
      <div className="h5 text-center fw-bold"> 10 USDT</div>
      </div>
    </>
  );
};

export default Homepage;
