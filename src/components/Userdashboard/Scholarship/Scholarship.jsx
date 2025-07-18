import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Scholarship = () => {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const [showModal, setShowModal] = useState(false);
    const [walletBalance, setWalletBalance] = useState(0);
     const [withdrawAmount, setWithdrawAmount] = useState('');
     const [uniqueKey, setUniqueKey] = useState('');
     const [showPassword, setShowPassword] = useState(false);
     const [accountPassword, setAccountPassword] = useState('');
const [showPassword2, setShowPassword2] = useState(false);
  const sponsorId = sessionStorage.getItem("mySponsorId"); // Replace this with dynamic ID if needed (e.g. from user context)
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const fetchRewards = async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/user/rewards/${sponsorId}`);
      console.log('API Response:', response.data.rewards);
      setRewards(response.data.rewards?.[0]?.rewards || []);
      setWalletBalance(response.data.rewards?.[0]?.reward_points|| 0);
    } catch (err) {
      console.error("Error fetching rewards:", err);
      setError("Failed to load rewards");
    } finally {
      setLoading(false);
    }
  };

   const handleSubmit = async () => {
    if (!withdrawAmount || !accountPassword || !uniqueKey) {
      return alert("Please fill in all fields.");
    }

    setLoading(true);

    try {
      const response = await axios.post(`${ROOT_URL}/user/create-scholarship-order`, {
        sponsorId,
        amount: Number(withdrawAmount),
        password: accountPassword,
        uniqueKey
      });

      // alert(response.data.message);
      swal('Success!', response.data.message, 'success');
      setShowModal(false);
      
      setWithdrawAmount('');
      setUniqueKey('');
      setAccountPassword('');
      window.location.assign('/userdashboard/withdrawalscholarship'); // Redirect to the same page to refresh data
    } catch (error) {
      // alert(error.response?.data?.message || 'Something went wrong.');
      swal('Oops!', error.response?.data?.message || 'Something went wrong.', 'error');
    } finally {
      setLoading(false);
    }
  };
    const handleCloseModal = () => {
    setShowModal(false);
    setWithdrawAmount('');
    setUniqueKey('');
  };
const togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    fetchRewards();
  }, []);

   const handleWithdrawClick = () => {
    setShowModal(true);
  };
  
  return (
    <div className="container mt-4">
     <div className="row">
          <div className="col-md-6 stretch-card grid-margin">
            <div className='card' style={{ borderRadius: '20px' }}>
              <div className="card-body">
                <h4 className="font-weight-normal mb-3 text-center">
                 Scholarship Wallet balance
                </h4>
                <div className='h5 text-center'>{walletBalance}</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card grid-margin text-end mt-4">
           
                <button className='btn btn-primary p-3' onClick={handleWithdrawClick} style={{ borderRadius: "15px" }} >
            Withdrawal amount
          </button>
              
          </div>
        </div>
      <h3 className="mb-3 text-center mt-3">All Scholarship</h3>

      <table className="table table-bordered text-center">
        <thead className="table-success">
          <tr>
            <th>S/N</th>
            <th>Date</th>
            <th>Amount($)</th>
          
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="4">{error}</td>
            </tr>
          ) : rewards.length === 0 ? (
            <tr>
              <td colSpan="4">No Scholarship available</td>
            </tr>
          ) : (
            rewards.map((reward, index) => (
              <tr key={reward._id}>
                <td>{index + 1}</td>
                <td>{reward.date}</td>
                <td>{reward.amount}</td>
                
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Withdraw USDT</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Available Wallet Balance</label>
                  <input type="text" className="form-control" value={walletBalance} readOnly />
                </div>
                <div className="mb-3">
                  <label className="form-label">Enter Withdraw Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">Enter account password</label>
                  <input
                    type={showPassword2 ? "text" : "password"}
                    className="form-control"
                    value={accountPassword}
                    onChange={(e) => setAccountPassword(e.target.value)}
                  />
                   <span className="position-absolute end-0 top-50 translate-middle-y me-3" onClick={togglePassword2} style={{ cursor: "pointer" }}>
              {showPassword2 ? <i className="fa fa-eye mt-4" style={{fontSize:"20px"}}></i> : <i className="fa fa-eye-slash mt-4" style={{fontSize:"20px"}}></i>}
            </span>
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">Enter Unique Key</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    value={uniqueKey}
                    onChange={(e) => setUniqueKey(e.target.value)}
                  />
                   <span className="position-absolute end-0 top-50 translate-middle-y me-3" onClick={togglePassword} style={{ cursor: "pointer" }}>
              {showPassword ? <i className="fa fa-eye mt-4" style={{fontSize:"20px"}}></i> : <i className="fa fa-eye-slash mt-4" style={{fontSize:"20px"}}></i>}
            </span>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Scholarship;
