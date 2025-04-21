import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
const Wallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [uniqueKey, setUniqueKey] = useState('');
  const [accountPassword, setAccountPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [showPassword2, setShowPassword2] = useState(false);
const sponsorId = sessionStorage.getItem('mySponsorId');
const userId = sessionStorage.getItem('mySponsorId');
const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [userwithdrawOrders, setUserwithdrawOrders] = useState([]);
  const [walletaddress, setWalletAddress] = useState('');
const [loading, setLoading] = useState(false);

  // Simulate API call to get wallet balance
  useEffect(() => {
    // Replace with real API call
    fetchWalletBalance();
     getAllWithdrawalOrders();
    getwalletaddress();
  }, []);

  const fetchWalletBalance = async () => {
    // Simulating API response
    const balanceFromApi = sessionStorage.getItem("wallet_Balance"); // replace this with actual fetch
    setWalletBalance(balanceFromApi);
  };
  const getAllWithdrawalOrders = async () => {
    try {
      const response = await axios.post(`${ROOT_URL}/user/get-walletorders-byid`, {
        sponsorId
      });
      console.log(response.data);
      setUserwithdrawOrders(response.data.withdrawalOrders);

    } catch (error) {
      console.error(error);
      // swal('Oops!', error.response?.data?.message || 'Something went wrong.', 'error');
    }
  }
  const getwalletaddress = async () => {
    try {
      const response = await axios.post(`${ROOT_URL}/user/get-wallet-address`, {
        userId
      });
      console.log(response.data);
      setWalletAddress(response.data.walletAddress);

    } catch (error) {
      console.error(error);
      // swal('Oops!', error.response?.data?.message || 'Something went wrong.', 'error');
    }
  }
    
  
  const handleWithdrawClick = () => {
    setShowModal(true);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setWithdrawAmount('');
    setUniqueKey('');
  };

  const handleSubmit = async () => {
    if (!withdrawAmount || !accountPassword || !uniqueKey) {
      return alert("Please fill in all fields.");
    }

    setLoading(true);

    try {
      const response = await axios.post(`${ROOT_URL}/user/withdrawal-request`, {
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
      fetchWalletBalance(); // Refresh wallet balance
    } catch (error) {
      // alert(error.response?.data?.message || 'Something went wrong.');
      swal('Oops!', error.response?.data?.message || 'Something went wrong.', 'error');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container mt-4">
        <div className='d-flex justify-content-end align-items-end mb-3'>
          <button className='btn btn-primary p-3' style={{ borderRadius: "15px" }} onClick={handleWithdrawClick}>
            Withdrawal USDT
          </button>
        </div>

        <div className="row">
          <div className="col-md-6 stretch-card grid-margin">
            <div className='card' style={{ borderRadius: '20px' }}>
              <div className="card-body">
                <h4 className="font-weight-normal mb-3 text-center">
                  Wallet balance
                </h4>
                <div className='h5 text-center'>{walletBalance}</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card grid-margin">
            <div className='card' style={{ borderRadius: '20px' }}>
              <div className="card-body">
                <h4 className="font-weight-normal mb-3 text-center">
                  Wallet address
                </h4>
                <div className='h5 text-center'>{walletaddress}</div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="my-3 text-center">Withdrawal history</h3>
        <table className="table table-bordered text-center">
          <thead className="table-success">
            <tr>
              <th>S/N</th>
              <th>Order No</th>
              <th>Amount</th>
              <th>Order date</th>
              <th>Wallet status</th>
            </tr>
          </thead>
          <tbody>
  {userwithdrawOrders.length > 0 ? (
    userwithdrawOrders.map((order, index) => (
      <tr key={order._id || index}>
        <td>{index + 1}</td>
        <td>{order.order_details.order_no}</td>
        <td>{order.order_details.withdrawal_amount}</td>
        <td>{new Date(order.order_details.withdrawal_order_date).toLocaleDateString()}</td>
        <td>{order.status}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5">No withdrawal history found.</td>
    </tr>
  )}
</tbody>
        </table>
      </div>

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
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Wallet;
