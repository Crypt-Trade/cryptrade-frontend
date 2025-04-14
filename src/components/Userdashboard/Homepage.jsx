import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/userdashboard/homepage.css";

const Homepage = () => {
  const [data, setData] = useState({
    userDetails: {},
    walletDetails: {},
  });
  const [current, setCurrent] = useState([]);
  // const [currentdirect, setCurrentdirect] = useState([]);

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL || "http://localhost:5000";
  const sponsorId = sessionStorage.getItem('mySponsorId');
  

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.post(`${ROOT_URL}/dashboard/user-dashboard`, {
          sponsorId: sponsorId,
        });
        console.log("Dashboard Data:", response.data);
        setCurrent(response.data);
        setData({
          userDetails: response.data.userDetails,
          walletDetails: response.data.walletDetails,
        });
        let walletBalance = response.data.walletDetails.walletBalance;
        sessionStorage.setItem('wallet_Balance', walletBalance);
      
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  const { userDetails, walletDetails } = data;

  return (
    <>
      <div className="row p-2">
        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1 ">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                User Status
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              <h5 className="mb-5">{userDetails.isActive === true ? "Active" : "Inactive"}</h5>
            </div>
          </div>
        </div>

        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Wallet Balance ($)
                <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
              <h3 className="mb-5">{walletDetails.walletBalance}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Direct Affiliate Bonus
                <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
             <h3 className="mb-5"> {current.currentDirectPoints}</h3>
              {/* <h2 className="mb-5">{walletDetails || 0}</h2> */}
            </div>
          </div>
        </div>
        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Team Affiliate Bonus
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              <h3 className="mb-5">{current.currentTeamPoints}</h3>
              </div>
          </div>
        </div>
      </div>

      <div className="row p-2">
       
      <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Personal Points
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              <h3 className="mb-5">{walletDetails.personalPoints}</h3>
              </div>
          </div>
        </div>

        {/* <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Withdraw Status
                <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
              <h2 className="mb-5">{walletDetails.withdrawStatus || ""}</h2>
            </div>
          </div>
        </div> */}

        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">Total Balance ($)</h4>
              <h3 className="mb-5">{walletDetails.walletBalance}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Weekly Team Points
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              <h3 className="mb-5">{walletDetails?.currentWeekPoints?.leftPoints || 0} | {walletDetails?.currentWeekPoints?.rightPoints || 0}</h3>
           
              </div>
          </div>
        </div>
        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Direct Points
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              <h3 className="mb-5">{walletDetails?.directPoints?.leftPoints || 0} | {walletDetails?.directPoints?.rightPoints || 0}</h3>
           
              </div>
          </div>
        </div>
      </div>
      <div className="row p-1">
          
      <div className="col-md-6 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Left Link
                
              </h4>
              <div className="d-flex">
              <div className="h5 mb-5 leftlink">{userDetails.leftRefferalLink}</div>
              {/* <span>hii</span> */}
              </div>
              
             
           
              </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
              Right Link
              </h4>
              <div className="d-flex">
              <div className="h5 mb-5 rightlink">{userDetails.rightRefferalLink}</div>
              {/* <span>hii</span> */}
              </div>
           
              </div>
          </div>
        </div>
       
      </div>

      <div className="d-flex justify-content-center">
        <div className="h5 text-center fw-bold">Minimum Withdraw:-</div>
        <div className="h5 text-center fw-bold ms-2">10 USDT</div>
      </div>
    </>
  );
};

export default Homepage;
