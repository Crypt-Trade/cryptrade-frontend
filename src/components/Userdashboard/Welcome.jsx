import React from 'react'

const Welcome = () => {
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
                                    <p>Hello test</p>
                                  </div>
                                  <div className="col-lg-6 col-sm-12 udbhablogo">
                                    
                                  </div>
                                </div>
                                <p style={{textAlign:"justify", lineHeight:"1.5"}}>
                                Thank you for being a part of xyz. By doing so, you have taken one of the most important decisions of your life that has the potential to transform your future. I take this occasion to heartily congratulate you and extend a warm welcome to this ever-growing xyz family. 
                                 xyz provides a legitimate and ethical entrepreneurship opportunity where you can build a successful career through commitment, focus, and hard work. Our compensation plan is designed to reward you generously with lucrative sales commissions, and I invite you to give your 100% to achieve both time and financial freedom.  In case you need any assistance, feel free to contact our Support Team, who will be more than happy to assist you.
                                  Kindly mention your User ID - <span className="ms-1">12345</span> in all future communication with us. Once again, welcome to the xyz! Congratulations on choosing to build an exciting career with us. We look forward to working closely with you. I wish you all the very best. May all your dreams come true.
                                </p>
                               
                                <p style={{lineHeight:"1.5"}}>
                                  With regards, <br />
                                 xyz
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