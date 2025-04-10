import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
// import "./kyc.css";
import { useNavigate } from 'react-router-dom'


const Walletdetails = () => {
    
  const userId = sessionStorage.getItem('mySponsorId');
  const name = sessionStorage.getItem('username');
  

 

  const [kycStatus, setKycStatus] = useState("loading");
  const [telegramId, setTelegramId] = useState('');
  const [Walletaddress, setWalletAddress] = useState('');

  const navigate = useNavigate();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const handleWalletSubmit = async (event) => {
    event.preventDefault();

    if (!userId || !name || !telegramId || !Walletaddress) {
      swal("Error", "All fields are required!", "error");
      return;
    }

    try {
      const response = await axios.post(`${ROOT_URL}/wallet/walletdetails/`, {
        userId,
        name,
        telegramId,
        Walletaddress
      });

      swal("Success!", "Wallet details submitted successfully!", "success");
      navigate('/userdashboard');
    } catch (error) {
      console.error("Error submitting wallet details:", error);
      swal("Error", "Failed to submit wallet details. Please try again later.", "error");
    }
  };

  useEffect(() => {
    const fetchKycStatus = async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/wallet/wallet-status/${userId}`)
        setKycStatus(response.data.walletStatus);
      } catch (error) {
        console.error("Error fetching KYC status:", error);
        swal("Error!", "Failed to fetch KYC status. Please try again later.", "error");
      }
    };

    fetchKycStatus();
  }, [ROOT_URL, userId]);

  const handleResubmitClick = () => {
    setKycStatus("not_submitted");
  };


//   const mobileNumber = sessionStorage.getItem('usermobilenumber');
  
  return (
    <>
    <div className="container my-3">
      {kycStatus === "loading" && <p>Loading status...</p>}

      {kycStatus === "not_submitted" && (
        <>
        
        <div className="container my-3">
       
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <div>
                    <div>
                      <div className="text-center h2 mb-2">Provide Your Wallet Details</div>
                    </div>

                    <div className="mb-3 row">
                      <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                     User ID
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          readOnly
                          className="form-control-plaintext bg-light p-2"
                          value={userId}
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Name
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control-plaintext bg-light p-2"
                          value={name}
                        />
                      </div>
                    </div>
                   
                    <div className="mb-3 row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Telegram ID
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control-plaintext bg-light p-2"
                           onChange={e =>setTelegramId(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                        Wallet address
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control-plaintext bg-light p-2"
                          onChange={e =>setWalletAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
             
          
             <button className="btn btn-primary w-25 mt-4" onClick={handleWalletSubmit}>Submit</button>
           </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      
        </>
      )}

       {kycStatus !== "not_submitted" && kycStatus !== "loading" && (
        <div className="d-flex flex-column align-items-center">
          <h3>Your Wallet Status</h3>
          <table className="table table-light table-striped w-75 mt-4">
            <thead>
              <tr>
              <th className="text-center">Name</th>
              
                <th className="text-center"> Status</th>
                {kycStatus === "rejected" && (
                <th className="text-center">Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
              <td className="text-center">{name}</td>
              
                <td className="text-center">
                  {kycStatus === "pending" && "Pending"}
                  {kycStatus === "verified" && "Verified"}
                  {kycStatus === "rejected" && "Rejected"}
                </td>
               
                  {kycStatus === "rejected" && (
                    <td className="text-center">
                    <button className="btn btn-warning" onClick={handleResubmitClick}>
                      Resubmit
                    </button>
                    </td>
                  )}
                
              </tr>
            </tbody>
          </table>
        </div>
      )} 
    </div>
    </>
  )
}

export default Walletdetails