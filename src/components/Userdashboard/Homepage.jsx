import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/userdashboard/homepage.css";

const Homepage = () => {
  const [data, setData] = useState({
    userDetails: {},
    walletDetails: {},
  });
  const [current, setCurrent] = useState([]);
  const [rank , setRank] = useState([]);
  const [weeklyPayoutTotal, setWeeklyPayoutTotal] = useState(0);
  const [referralleftLink, setReferralleftLink] = useState([]);
  const [referralrightLink, setReferralrightLink] = useState([]);
  const [copiedleft, setCopied] = useState(false);
  const [copiedright , setCopiedright] = useState(false);
  // const [currentdirect, setCurrentdirect] = useState([]);

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL || "http://localhost:5000";
  const sponsorId = sessionStorage.getItem('mySponsorId');
  const mysponsorid = sessionStorage.getItem('mySponsorId');
  

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
        const earnings = response.data.walletDetails?.weeklyEarnings || [];
        const total = earnings.reduce((sum, entry) => sum + (entry.payoutAmount || 0), 0);
        setWeeklyPayoutTotal(total);
        setReferralleftLink(response.data.userDetails.leftRefferalLink);
        setReferralrightLink(response.data.userDetails.rightRefferalLink);
        let walletBalance = response.data.walletDetails.walletBalance;
        sessionStorage.setItem('wallet_Balance', walletBalance);
      
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    const fetchRankData = async () => {
       if (!mysponsorid) return; 
      try {
        const response = await axios.post(`${ROOT_URL}/user/ranking`,{mysponsorid});
        console.log("Rank Data:", response.data);
        setRank(response.data);
      } catch (error) {
        console.error("Error fetching rank data:", error);
      }
    }

    fetchDashboardData();
    fetchRankData();
  }, [mysponsorid]);
  const handleCopyLinkleft = () => {
    if (referralleftLink) {
      navigator.clipboard
        .writeText(referralleftLink)
        .then(() => {
          setCopied(true); // Set copied to true
          setTimeout(() => setCopied(false), 4000);
          // alert('Referral link and code copied to clipboard!');
        })
        .catch((error) => {
          console.error("Error copying referral link and code:", error);
        });
    } else {
      console.error("No referral link to copy");
    }
  };

  const handleCopyLinkright = () => {
    if (referralrightLink) {
      navigator.clipboard
        .writeText(referralrightLink)
        .then(() => {
          setCopiedright(true); // Set copied to true
          setTimeout(() => setCopiedright(false), 4000);
          // alert('Referral link and code copied to clipboard!');
        })
        .catch((error) => {
          console.error("Error copying referral link and code:", error);
        });
    } else {
      console.error("No referral link to copy");
    }
  };

  const { userDetails, walletDetails } = data;

  return (
    <>
      <div className="row p-2">
        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-dark h-75 usercard1 ">
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
          <div className="card card-img-holder text-dark h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Available balance($)
                <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
              <h3 className="mb-5">{walletDetails.walletBalance}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-dark h-75 usercard1">
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
          <div className="card card-img-holder text-dark h-75 usercard1">
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
          <div className="card card-img-holder text-dark h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Personal Points
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              <h3 className="mb-5">{walletDetails.personalPoints}</h3>
              </div>
          </div>
        </div>

        

        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-dark h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">Total Balance ($)</h4>
              <h3 className="mb-5">{weeklyPayoutTotal}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-dark h-75 usercard1">
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
          <div className="card card-img-holder text-dark h-75 usercard1">
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
      <div className="row p-2">
        <div className="col-md-3 stretch-card grid-margin">
          <div className="card card-img-holder text-dark h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Rank
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              
                <h5 className="mb-5">
  {rank?.message === "No rank achieved yet"
    ? "No rank achieved"
    : rank?.userRank?.ranking_details?.length > 0
    ? rank.userRank.ranking_details[rank.userRank.ranking_details.length - 1].rank_name
    : "Loading..."}
</h5>

              
           
              </div>
          </div>
        </div>
      </div>
      
      <div className="row p-1">
          
      <div className="col-md-6 stretch-card grid-margin">
          <div className="card card-img-holder text-dark h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Left Link
                
              </h4>
              <div className="d-flex">
              <div className="h3 mb-5 leftlink">{userDetails.leftRefferalLink}</div>
              {
                    copiedleft ? <span className="ms-2 text-dark">Copied!</span> : <i className="fa fa-copy ms-2" onClick={handleCopyLinkleft}></i>
                  }
              </div>
              
             
           
              </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 stretch-card grid-margin">
          <div className="card card-img-holder text-dark h-75 usercard1">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
              Right Link
              </h4>
              <div className="d-flex">
              <div className="h6 mb-5 rightlink">{userDetails.rightRefferalLink}</div>
              {
                  copiedright ? <span className="ms-2 text-dark">Copied! </span> : <i className="fa fa-copy ms-2" onClick={handleCopyLinkright}></i>
                }
              </div>
           
              </div>
          </div>
        </div>
       
      </div>

      <div className="d-flex justify-content-center p-3" style={{backgroundColor: "#004d97" }}>
        <div className="h5 text-center  fw-semibold text-white" style={{fontSize:"20px"}}>Minimum Withdraw:-</div>
        <div className="h5 text-center fw-bold ms-2 text-white">10 USDT</div>
      </div>
    </>
  );
};

export default Homepage;
