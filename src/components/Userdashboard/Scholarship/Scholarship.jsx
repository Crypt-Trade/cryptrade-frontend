import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Scholarship = () => {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sponsorId = sessionStorage.getItem("mySponsorId"); // Replace this with dynamic ID if needed (e.g. from user context)
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const fetchRewards = async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/user/rewards/${sponsorId}`);
      setRewards(response.data.rewards?.[0]?.rewards || []);
    } catch (err) {
      console.error("Error fetching rewards:", err);
      setError("Failed to load rewards");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRewards();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">All Scholarship</h3>

      <table className="table table-bordered text-center">
        <thead className="table-success">
          <tr>
            <th>S/N</th>
            <th>Date</th>
            <th>Amount($)</th>
            <th>Paid Status</th>
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
                <td>
                  
                    {reward.status}
                 
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Scholarship;
