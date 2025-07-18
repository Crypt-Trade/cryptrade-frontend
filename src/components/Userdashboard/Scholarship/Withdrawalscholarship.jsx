import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Withdrawalscholarship = () => {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
   const sponsorId = sessionStorage.getItem("mySponsorId");
  
  const fetchRewards = async () => {
    try {
      const response = await axios.post(`${ROOT_URL}/admin/get-scholarship-orders`, {sponsorId});
      console.log('API Response:', response.data);
      setRewards(response.data.orders || []); // ✅ Correct key: 'orders'
    } catch (error) {
      console.error('Error fetching scholarship orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRewards();
  }, []);

  return (
    <div className="container p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
       <div className="table-responsive">
       <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">User ID</th>
              <th className="text-center">User Name</th>
              <th className="text-center">Scholarship order date</th>
              <th className="text-center">Scholarship Amount</th>
              <th className="text-center">Status</th>
             

            </tr>
          </thead>
          <tbody>
            {rewards.map((reward,index) => (
              <tr key={reward._id}>
                <td className="text-center">{index+1}</td>
                <td className="text-center">{reward.user_details?.user_mySponsor_id || 'N/A'}</td>
                <td className="text-center">{reward.user_details?.user_name || 'N/A'}</td>
              <td className="text-center">{new Date(reward.order_details?.scholarship_order_date).toLocaleDateString()}</td>
                <td className="text-center">{reward.order_details?.scholarship_amount || 0}</td>
                <td className="text-center">
                  {reward.status === 'approved' ? (
                    <span className="text-green-600 font-semibold">Approved</span>
                  ) : (
                    <span className="text-yellow-600 font-semibold capitalize">{reward.status}</span>
                  )}
                </td>
               
                 
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default Withdrawalscholarship;
