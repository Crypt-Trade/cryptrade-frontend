import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await  axios.get(`${ROOT_URL}/order/all-orders`);
        setOrders(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">My Orders</h3>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      {!loading && !error && (
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
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>{order.orderNo}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.packageName}</td>
                  <td>{order.packageAmount} USDT</td>
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
      )}
    </div>
  );
};

export default Reports;
