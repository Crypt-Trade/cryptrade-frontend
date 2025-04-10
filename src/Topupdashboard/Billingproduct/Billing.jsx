import React, { useState } from "react";
import axios from "axios";
import "../../css/Topupdashboard/allpackage.css";
import swal from "sweetalert"
const Billing = () => {
  const [cart, setCart] = useState([]);
  const [sponsorId, setSponsorId] = useState("");
  const [orderNo, setOrderNo] = useState("");
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.length > 0) {
        swal("Notice", "You can only add one product to the cart.", "warning");
        return prevCart;
      }
      return [{ ...product, quantity: 1 }];
    });
  };
  
  const submitOrder = async () => {
    if (!sponsorId || !orderNo || cart.length === 0) {
      swal("Opps!", "Please fill all fields and add items to cart.", "error");
      return;
    }
    
    const order_price = cart.reduce((acc, item) => acc + item.price, 0);
    
    try {
      const response = await axios.post(`${ROOT_URL}/order/update-status`, {
        mySponsorId: sponsorId,
        order_no: orderNo,
        order_price: order_price,
      });
      alert(response.data.message);
      swal("yeah!", response.data.message, "success");
      setCart([]);
      setSponsorId("");
      setOrderNo("");
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order.");
    }
  };

  const products = [
    { productId: 1, name: "Kick Starter", price: 50 },
    { productId: 2, name: "Bull Starter", price: 100 },
    { productId: 3, name: "Whales Starter", price: 500 },
    { productId: 4, name: "Monthly subscription", price:25 },
   
  ];

  return (
    <>
      <div className="row">
        <div className="col-lg-8 ">
          <div className="container">
            <div className="row text-align-center">
              {products.map((product) => (
                <div className="col-md-4 my-4" key={product.productId}>
                  <div className="card">
                    <div className="card-body">
                      <h5>{product.name}</h5>
                      <div className="fw-bold h5">Price: {product.price} USDT</div>
                      <div className="d-flex justify-content-center mt-5 text-center">
                        <button
                          className="btn btn-primary text-center"
                          onClick={() => addToCart(product)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-4 bg-white p-4">
          <div className="h-100 d-flex flex-column w-100">
            <input 
              type="text" 
              className="form-control p-2 mb-2 w-100" 
              placeholder="Enter Sponsor ID..." 
              value={sponsorId} 
              onChange={(e) => setSponsorId(e.target.value)} 
            />
            <div className="d-flex mb-2">
              <label className="mt-2 me-2">Enter order no:</label>
              <input 
                type="text" 
                className="form-control p-2 mb-2 w-50" 
                value={orderNo} 
                onChange={(e) => setOrderNo(e.target.value)} 
              />
            </div>
            
            <div className="pos-sidebar-body tab-content"> 
              {cart.length > 0 ? (
                <ul>
                  {cart.map((item) => (
                    <div className="card" key={item.productId}>
                      <div className="card-body">
                        <span>{item.name} - {item.price} USDT</span>
                      </div>
                    </div>
                  ))}
                </ul>
              ) : (
                <p>No items in cart</p>
              )}
            </div>
            <div className="pos-sidebar-footer">
              <div className="mt-3 d-flex justify-content-between align-items-center">
                <h6 style={{ color: "#095444" }} className="text-start">
                  Total price: {cart.reduce((acc, item) => acc + item.price, 0)} USDT
                </h6>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  onClick={submitOrder}
                >
                  Submit Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
