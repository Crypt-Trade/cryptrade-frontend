import React from 'react'
import "../css/Topupdashboard/hometopup.css";
const Hometopup = () => {
  return (
   <>
    <div className="row p-2">
                  <div className="col-md-4 stretch-card grid-margin" >
                    <div className="card card-img-holder text-white h-75 gradientcard ">
                      <div className="card-body">
                        {/* <img src={pic} className="card-img-absolute" alt="circle-image"  /> */}
                        <h4 className="font-weight-normal mb-3">Monthly business($)<i className="mdi mdi-chart-line mdi-24px float-end"></i>
                        </h4>
                        <span className="mb-5 h5">Active</span>

                      
                      </div>
                    </div>
                  </div>
                 
                  <div className="col-md-4 stretch-card grid-margin">
                    <div className="card  card-img-holder text-white h-75 gradientcard2">
                      <div className="card-body">
                        {/* <img src={pic1} className="card-img-absolute" alt="circle-image" /> */}
                        <h4 className="font-weight-normal mb-3">Monthly user<i className="mdi mdi-diamond mdi-24px float-end"></i>
                        </h4>
                        <h3 className="mb-5"></h3>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 stretch-card grid-margin">
                    <div className="card card-img-holder text-white h-75 gradientcard3" style={{backgroundColor:"#265250"}}>
                      <div className="card-body">
                        {/* <img src={pic2} className="card-img-absolute" alt="circle-image" /> */}
                        <h4 className="font-weight-normal mb-3">Available balance($)<i className="mdi mdi-diamond mdi-24px float-end"></i>
                        </h4>
                        <h3 className="mb-5">1000</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-md-4 stretch-card grid-margin " >
                    <div className="card card-img-holder text-white h-75 gradientcard2 " style={{backgroundColor:"#265250"}}>
                      <div className="card-body">
                        {/* <img src={pic} className="card-img-absolute" alt="circle-image"  /> */}
                        <h4 className="font-weight-normal mb-3">Total business($)<i className="mdi mdi-chart-line mdi-24px float-end"></i>
                        </h4>
                        <h2 className="mb-5">1000</h2>
                      
                      </div>
                    </div>
                  </div>
                 
                  <div className="col-md-4 stretch-card grid-margin">
                    <div className="card  card-img-holder text-white h-75 gradientcard3" style={{backgroundColor:"#265250"}}>
                      <div className="card-body">
                        {/* <img src={pic1} className="card-img-absolute" alt="circle-image" /> */}
                        <h4 className="font-weight-normal mb-3"><i className="mdi mdi-diamond mdi-24px float-end"></i>
                        </h4>
                        <h2 className="mb-5"></h2>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 stretch-card grid-margin">
                    <div className="card card-img-holder text-white h-75 gradientcard" style={{backgroundColor:"#265250"}}>
                      <div className="card-body">
                        {/* <img src={pic2} className="card-img-absolute" alt="circle-image" /> */}
                        <h4 className="font-weight-normal mb-3">Total balance($)</h4>
                        {/* <h2 className="mb-5">₹</h2> */}
                      </div>
                    </div>
                  </div>
                </div>
   </>
  )
}

export default Hometopup