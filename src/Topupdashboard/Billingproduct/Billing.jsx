import React,{useState} from "react";
import "../../css/Topupdashboard/allpackage.css";
const Billing = () => {
    const addToCart = (product) => {
        setCart((prevCart) => {
          // Check if the product is already in the cart
          const isProductInCart = prevCart.find(
            (item) => item.productId === product.productId
          );
    
          // If product is already in the cart, don't add it again
          if (isProductInCart) {
            return prevCart;
          }
    
          // Add the product to the cart with an initial quantity of 1
          return [...prevCart, { ...product, quantity: 1 }];
        });
      };
    
    
  return (
    <>
      <div className="row">
      <div className="col-lg-8 ">
      <div className="container">
      <div className="row justify-content-center">
        
        <div className="col-md-4 my-4">
          <div className="card cardpackage" style={{ background: 'linear-gradient(35deg,rgb(214, 27, 170),rgb(166, 173, 90))' }}>
            <div className="card-body text-white">
              <h5 className="text-white" style={{ lineHeight: '105%' }}>Kick Starter</h5>
              <div className="fw-bold h5 text-white">50 USDT</div>
              <div className="d-flex justify-content-center mt-5">
                <button className="btn btn-primary"   onClick={() => addToCart(productdata)}>Add to cart</button>
              </div>
              {/* <div className="kick fw-bold h5">🌟🌟 Add on 25 USDT Monthly</div>
              <div className="kick">🌟 Basic trading knowledge</div>
              <div className="kick">🌟 Meme coin name</div>
              <div className="kick">🌟 1-month subscription for premium</div>
              <div className="kick">🌟 Bonus 1-2 long-term GEM coin</div> */}
            </div>
          </div>
        </div>

       
        <div className="col-md-4 my-4">
          <div className="card cardpackage" style={{ background: 'linear-gradient(45deg, rgb(15, 169, 167), rgb(83, 236, 45))' }}>
            <div className="card-body text-white">
              <h5 className="text-white">Bull Starter</h5>
              <div className="fw-bold h5 text-white">100 USDT</div>
              <div className="d-flex justify-content-center mt-5">
                <button className="btn btn-primary"   onClick={() => addToCart(productdata)}>Add to cart</button>
              </div>
              {/* <div className="kick fw-bold h5">🌟🌟 Add on 25 USDT Monthly</div>
              <div className="kick">🌟 Advance crypto knowledge</div>
              <div className="kick">🌟 Meme coin checklist</div>
              <div className="kick">🌟 3-month subscription for premium group</div>
              <div className="kick">🌟 Future trading call</div>
              <div className="kick">🌟 Bonus 5 long-term holding</div> */}
            </div>
          </div>
        </div>

        
        <div className="col-md-4 my-4">
          <div className="card cardpackage" style={{ background: 'linear-gradient(95deg, rgb(198, 66, 130), rgb(217, 158, 116))' }}>
            <div className="card-body text-white">
              <h5 className="fw-bold text-white">Whales Starter</h5>
              <div className="fw-bold h5 text-white">500 USDT</div>
              <div className="d-flex justify-content-center mt-5">
                <button className="btn btn-primary"   onClick={() => addToCart(productdata)}>Add to cart</button>
              </div>
              {/* <div className="kick fw-bold h5">🌟🌟 Add on 25 USDT Monthly</div>
              <div className="kick">🌟 Master trading skill + lifetime asset</div>
              <div className="kick">🌟 1-year subscription premium group</div>
              <div className="kick">🌟 10 GEM coin name</div>
              <div className="kick">🌟 Portfolio management</div>
              <div className="kick">🌟 Future trade call</div>
              <div className="kick">🌟 Liquidation strategy</div>
              <div className="kick">🌟 Future scalping</div>
              <div className="kick">🌟 20 long-term coin name</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div className="col-lg-4 bg-white p-4">
      <div className="h-100 d-flex flex-column w-100 ">
                    <input
                      type="text"
                      className="form-control p-2 mb-2 w-100"
                      placeholder="Enter Sponsor ID..."
                    //   value={userSponsorId}
                    //   onChange={handleInputChange}
                    />
                    {/* Display the name if found */}

                  

                    {/* <input type="text"  className="form-control p-4 mb-2 w-100"
                          placeholder="Enter user Sponsor ID..." onChange={e => setuserSponsorId(e.target.value)} /> */}
                    <div
                      className="pos-sidebar-body tab-content"
                      data-scrollbar="true"
                    >
                      <div  className="scrollbar" 
                        style={{
                          maxHeight: "300px",
                            overflow: "overlay",
                          paddingRight: "15px",
                          boxSizing: "content-box",
                          width:"400px"
                         
                        }}
                      >
                        {/* {renderCartItems()} */}
                      </div>
                      <div className="pos-sidebar-footer">
                        
                        <div className="mt-3 d-flex justify-content-between align-items-center">
                        <h5 style={{color:"#095444"}} className="text-start">Total price: </h5>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            // onClick={handleSubmitOrder}
                          >
                            Submit Order
                          </button>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
      </div>

      </div>
    </>
  );
};

export default Billing;
