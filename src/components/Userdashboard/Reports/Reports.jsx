import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const mySponsorId = sessionStorage.getItem("mySponsorId");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post(`${ROOT_URL}/user/orderhistory`, { mySponsorId });
        console.log(response.data);

        if (response.data.orders && response.data.orders.length > 0) {
          setOrders(response.data.orders);
        } else {
          setOrders([]); // No orders
        }

      } catch (err) {
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">My Orders</h3>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className='table-responsive'>
          <table className="table table-bordered text-center">
            <thead className="table-success">
              <tr>
                <th>S/N</th>
                <th>Order No</th>
                <th>Order Date</th>
                <th>Package Name</th>
                <th>Package Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr key={order.id || index}>
                    <td>{index + 1}</td>
                    <td>{order.order_details?.order_no || "-"}</td>
                    <td>{order.order_details?.order_date ? new Date(order.order_details.order_date).toLocaleDateString('en-GB') : "-"}</td>
                    <td>{order.package_name}</td>
                    <td>{order.order_details?.order_price} USDT</td>
                    <td>{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No orders found</td>
                </tr>
              )}
            </tbody>
          </table>
          {/* {error && <p className="text-center text-danger mt-2">{error}</p>} */}
        </div>
      )}
    </div>
  );
};

export default Reports;
