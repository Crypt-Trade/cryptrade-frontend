import React from 'react'

const Welcome = () => {
  const username = sessionStorage.getItem("username");
  const userId = sessionStorage.getItem("mySponsorId");

  return (
   <>
    <div className="invoice mt-5">
            <div className="d-flex justify-content-end">
              <button className="btn btn-success m-3">
                <i
                  className="fa fa-download"
                  style={{ fontSize: "20px", color: "white" }}
                //   onClick={downloadPDF}
                ></i>{" "}
                Download
              </button>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div>
                    <div className="card">
                      <div className="card-body">
                        <div className="double-border">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="container mt-4">
                              <div className="row">
                              <div className="col-lg-12 text-center">
                              {/* <img
                                      src={pic2}
                                      width={130}
                                      style={{ marginTop: "-20px" }}
                                      alt="Udbhab Logo"
                                    /> */}
    
                              </div>
    
                              </div>
                                <div className="row">
                                  <div className="col-lg-6 col-sm-12 name">
                                    <p>Hello <span>{username}</span></p>
                                  </div>
                                  <div className="col-lg-6 col-sm-12 udbhablogo">
                                    
                                  </div>
                                </div>
                                <p style={{textAlign:"justify", lineHeight:"1.5"}}>
                                We are thrilled to welcome you to the Cryptrade community! You're now part of an elite group of crypto enthusiasts and traders who are taking advantage of real-time, expert-backed trading signals to stay ahead of the market.
At Cryptrade, our mission is simple — to help you trade smarter, faster, and with greater confidence. Whether you're a seasoned trader or just getting started in the world of cryptocurrency, our signals are designed to guide your trading decisions with precision.
We’re excited to have you with us and look forward to helping you achieve your trading goals. Remember, consistency, patience, and discipline are the keys to long-term success in crypto trading.
                                 </p>
                               
                                <p style={{lineHeight:"1.5"}}>
                                  With regards, <br />
                                 Cryptrade
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
   </>
  )
}

export default Welcome