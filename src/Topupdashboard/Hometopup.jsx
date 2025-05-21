import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/Topupdashboard/hometopup.css";

const Hometopup = () => {
  const [data, setData] = useState({
    monthlyBusiness: 0,
    totalUsers: 0,
    available_Balance: 0,
    allBusiness: 0,
    total_Balance: 0,
  });
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchTopupDashboardData = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/dashboard/topup-dashboard`); // Replace with your actual API endpoint
        console.log("Dashboard data:", response.data); // Log the response data
        setData(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchTopupDashboardData();
  }, []);

  return (
    <>
      <div className="row p-2">
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 gradientcard">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Monthly business($)
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              <h3 className="mb-5">{data.monthlyBusiness}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 gradientcard2">
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Total user
                <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
              <h3 className="mb-5">{data.totalUsers}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 gradientcard3" style={{ backgroundColor: "#265250" }}>
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Available balance($)
                <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
              <h3 className="mb-5">{data.available_Balance}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row p-2">
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 gradientcard2" style={{ backgroundColor: "#265250" }}>
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
                Total business($)
                <i className="mdi mdi-chart-line mdi-24px float-end"></i>
              </h4>
              <h2 className="mb-5">{data.allBusiness}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 gradientcard3" style={{ backgroundColor: "#265250" }}>
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">
              Active users
                {/* You can name this section if needed */}
                <i className="mdi mdi-diamond mdi-24px float-end"></i>
              </h4>
              <h2 className="mb-5">{data.totalActiveUsers}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 stretch-card grid-margin">
          <div className="card card-img-holder text-white h-75 gradientcard" style={{ backgroundColor: "#265250" }}>
            <div className="card-body">
              <h4 className="font-weight-normal mb-3">Total balance($)</h4>
              <h2 className="mb-5">{data.total_Balance}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hometopup;
