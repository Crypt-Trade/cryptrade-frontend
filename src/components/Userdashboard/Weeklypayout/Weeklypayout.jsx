import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weeklypayout = () => {
  const [payouts, setPayouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const userId = sessionStorage.getItem('userid');
  useEffect(() => {
    const fetchPayouts = async () => {
      try {
        const response = await axios.post(`${ROOT_URL}/payout/weekly-earnings`,{userId});
        console.log(response.data.weeklyEarnings);
        setPayouts(response.data.weeklyEarnings);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch payouts');
      } finally {
        setLoading(false);
      }
    };

    fetchPayouts();
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">Weekly Payouts</h3>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {!loading && !error && (
        <table className="table table-bordered text-center">
          <thead className="table-success">
            <tr>
              <th>S/N</th>
              <th>Week</th>
              <th>Direct affiliate bonus</th>
              <th>Team affiliate bonus</th>
              <th>Payout Amount</th>
              {/* <th>Payout Status</th> */}
            </tr>
          </thead>
          <tbody>
            {payouts.length > 0 ? (
              payouts.map((payout, index) => (
                <tr key={payout._id}>
                  <td>{index + 1}</td>
                  <td>{formatDate(payout.week)}</td>
                  <td>{payout.directSalesBonus}</td>
                  <td>{payout.teamSalesBonus}</td>
                  <td>${payout.payoutAmount.toFixed(2)}</td>
                  {/* <td>{payout.payoutAmount > 0 ? 'Paid' : 'Pending'}</td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No payouts available</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Weeklypayout;
