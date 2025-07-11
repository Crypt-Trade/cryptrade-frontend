import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../css/userdashboard/allpackage.css";
import swal from "sweetalert"

const Allpackages = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState("");
  const [showDeposit, setShowDeposit] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);
  const depositAddress = "0xea2f0B3d76D4792470f48d1aC90Ef77Cb503146c";
  const useId = sessionStorage.getItem('mySponsorId');
  const userobject_id = sessionStorage.getItem('userid');
  const user_name = sessionStorage.getItem('username');
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const handlePackageChange = (event) => {

    setSelectedPackage(event.target.value);
    setShowDeposit(false);
    setScreenshot(null);
  };

  const handleDepositClick = () => {
    setShowDeposit(true);
  };

  const handleFileChange = (event) => {
    setScreenshot(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!screenshot) {
      alert("Please upload a screenshot before submitting.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("user_object_id", userobject_id); // Replace with actual user ID
    formData.append("user_mySponsor_id", useId); // Replace with actual sponsor ID
    formData.append("user_name", user_name); // Replace with actual user name
    formData.append("order_price", selectedPackage === "kickstarter" ? 50 : selectedPackage === "bull" ? 100 : selectedPackage === "whales" ? 500 : selectedPackage === "Premium" ? 1000 : 25);
    formData.append("package_name", selectedPackage);
    formData.append("image", screenshot);

    try {
      const response = await axios.post(`${ROOT_URL}/order/create`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // alert("Order created successfully!");
      swal("Thank you !" ,"Order created successfully!","success");
       navigate("/userdashboard/reports");
    } catch (error) {
      // alert("Error submitting order: " + error.response?.data?.message || error.message);
      swal("Error", "Error submitting order: " + error.response?.data?.message || error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* <h2 className="text-center my-2">All Packages</h2> */}
      <div className="row justify-content-center">
        {/* Kick Starter Package */}
        <div className="col-md-3 my-4 ">
        <div className="card p-3 mt-3 w-100 w-md-75 w-lg-50 h-100 rounded-3 cardpackage">

            <div className="card-body d-flex flex-column">
              <h3 className="text-center fw-bold">Kick Starter</h3>
              <div className="fw-bold h5 text-center mt-2">50 USDT (Online)</div>
              <div className="flex-grow-1">
              <div className="d-flex mt-2">
              <div>🌟</div>
              <div className="ms-2"> Basic trading knowledge</div>
              </div>
              <div className="d-flex mt-2">
              <div>🌟</div>
              <div className="ms-2"> Meme coin name</div>
              </div>
              <div className="d-flex mt-2">
              <div>🌟</div>
              <div className="ms-2">1-month subscription for premium</div>
              </div>
               <div className="d-flex mt-2">
              <div>🌟</div>
              <div className="ms-2">Bonus 1-2 long-term GEM coin</div>
              </div>
               <div className="d-flex mt-2">
              <div>🌟</div>
              <div className="ms-2">Monthly Scholarship 3%</div>
              </div>
                {/* <div className="kick">🌟 Basic trading knowledge</div> */}
                {/* <div className="kick">🌟 Meme coin name</div> */}
                {/* <div className="kick">🌟 1-month subscription for premium</div> */}
                {/* <div className="kick">🌟 Bonus 1-2 long-term GEM coin</div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bull Starter Package */}
        <div className="col-md-3 my-4">
        <div className="card p-3 mt-3 w-100 w-md-75 w-lg-50 rounded-3 h-100 cardpackage">

            <div className="card-body d-flex flex-column">
              <h3 className="text-center fw-bold">Bull Starter</h3>
              <div className="fw-bold h5 text-center mt-2">100 USDT (Online)</div>
              <div className="flex-grow-1">
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2"> Advance crypto knowledge</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2"> Meme coin checklist</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2"> 3-month subscription for premium group</div>
              </div>
               <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Future trading call</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Bonus 5 long-term holding</div>
              </div>
               <div className="d-flex mt-2">
              <div>🌟</div>
              <div className="ms-2">Monthly Scholarship 5%</div>
              </div>
                {/* <div className="kick">🌟 Advance crypto knowledge</div> */}
                {/* <div className="kick">🌟 Meme coin checklist</div> */}
                {/* <div className="kick">
                  🌟 3-month subscription for premium group
                </div> */}
                {/* <div className="kick">🌟 Future trading call</div> */}
                {/* <div className="kick">🌟 Bonus 5 long-term holding</div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Whales Starter Package */}
        <div className="col-md-3 my-4">
        <div className="card p-3 mt-3 w-100 w-md-75 w-lg-50 rounded-3 h-100 cardpackage">
            <div className="card-body d-flex flex-column">
              <h3 className="text-center fw-bold">Whales Starter</h3>
              <div className="fw-bold h5 text-center">500 USDT (Online/Offline)</div>
              <div className="flex-grow-1">
              <div className="d-flex">
                <div>🌟</div>
                <div className="ms-2">Master trading skill + life time asset</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">1-year subscription for premium group</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">10 GEM coin name</div>
              </div>
               <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Portfolio management</div>
              </div>
               <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Future trade call</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Liquidation strategy</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Future scalping</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">20 long-term coin name</div>
              </div>
               <div className="d-flex mt-2">
              <div>🌟</div>
              <div className="ms-2">Monthly Scholarship 8%</div>
              </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Premium package */}
        <div className="col-md-3 my-4">
        <div className="card p-3 mt-3 w-100 w-md-75 w-lg-50 rounded-3 h-100 cardpackage">
            <div className="card-body d-flex flex-column">
              <h3 className="text-center fw-bold">Premium Master Trader Course</h3>
              <div className="fw-bold h5 text-center">1000 USDT(Online/ Offline)</div>
              <div className="flex-grow-1">
              <div className="d-flex">
                <div>🌟</div>
                <div className="ms-2">Portfolio Management</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">20 GEM Coin List</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">10 MEME Coin List</div>
              </div>
               <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Lifetime  Subscription</div>
              </div>
               <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Lifetime Support By Expert Trader</div>
              </div>
             
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Monthly Scholarship 10%</div>
              </div> 
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Subscription (Add-On) */}
    
      </div>
      <div className="row">
       <div className="col-md-3 my-4">
        <div className="card p-3 mt-3 w-100 w-md-75 w-lg-50 rounded-3 h-100 cardpackage">
            <div className="card-body d-flex flex-column">
              <h3 className="text-center fw-bold">Bull Master Trader Course</h3>
              <div className="fw-bold h5 text-center">2000 USDT(Online/ Offline)</div>
              <div className="flex-grow-1">
              <div className="d-flex">
                <div>🌟</div>
                <div className="ms-2">Portfolio Management</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">20 GEM Coin List</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">10 MEME Coin List</div>
              </div>
               <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Lifetime  Subscription</div>
              </div>
               <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Lifetime Support By Expert Trader</div>
              </div>
             
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Monthly Scholarship 12%</div>
              </div> 
              </div>
            </div>
          </div>
        </div>
         <div className="col-md-3 my-4">
        <div className="card p-3 mt-3 w-100 w-md-75 w-lg-50 rounded-3 h-100 cardpackage">
            <div className="card-body d-flex flex-column">
              <h3 className="text-center fw-bold">Whales Master Trader Course</h3>
              <div className="fw-bold h5 text-center">5000 USDT(Online/ Offline)</div>
              <div className="flex-grow-1">
              <div className="d-flex">
                <div>🌟</div>
                <div className="ms-2">Portfolio Management</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">20 GEM Coin List</div>
              </div>
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">10 MEME Coin List</div>
              </div>
               <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Lifetime  Subscription</div>
              </div>
               <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Lifetime Support By Expert Trader</div>
              </div>
             
              <div className="d-flex mt-2">
                <div>🌟</div>
                <div className="ms-2">Monthly Scholarship 15%</div>
              </div> 
              </div>
            </div>
          </div>
        </div>
            <div className="col-md-3 my-4">
        <div className="card p-3 mt-3 w-100 w-md-75 w-lg-50 rounded-3 h-100 cardpackage">
            <div className="card-body d-flex flex-column">
              <h5 className="text-center fw-bold">Monthly subscription</h5>
              <h5 className="text-center fw-bold">(Add On)</h5>
              <div className="fw-bold h5 text-center">25 USDT</div>
              <div className="flex-grow-1">
              <div className="d-flex">
                <div >🌟</div>
                <div className="ms-2">1-month subscription for premium</div>
              </div>
                {/* <div className="kick">🌟1-month subscription for premium</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Package Selection UI */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-center my-3 gap-2">
  <div className="mt-2 text-center text-md-center fw-bold">Select Any Package:</div>
  <div className=" select_package">
    <select className="form-select" onChange={handlePackageChange}>
      <option className="option_package" value="">Select Package</option>
      <option className="option_package" value="kickstarter">Kickstarter: 50 USDT</option>
      <option className="option_package" value="bull">Bull: 100 USDT</option>
      <option className="option_package" value="whales">Whales: 500 USDT</option>
      <option className="option_package" value="monthly">Monthly: 25 USDT</option>
      <option className="option_package" value="Premium">Premium Master Trader Course: 1000 USDT</option>
      <option className="option_package" value="Premium">Bull Master Trader Course: 2000 USDT</option>
      <option className="option_package" value="Premium">Whales Master Trader Course: 5000 USDT</option>
    </select>
  </div>
</div>


        {/* Deposit Section */}
        {selectedPackage && (
          <div className="d-flex justify-content-center my-5">
            <div className="card p-3 mt-3 w-50 rounded-3">
              <h5 className="text-center">Confirm Your Deposit</h5>
              {!showDeposit ? (
                <div className="text-center py-4">
                  <button className="btn btn-primary w-50" onClick={handleDepositClick}>Deposit</button>
                </div>
              ) : (
                <>
                  <div className="mt-2">
                    <label>Deposit Address:</label>
                    <input type="text" className="form-control" value={depositAddress} readOnly />
                  </div>
                  <div className="mt-3">
                    <label>Upload Screenshot:</label>
                    <input type="file"  accept="image/*" className="form-control" onChange={handleFileChange} />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary mt-3 w-25" onClick={handleSubmit} disabled={loading}>
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Allpackages;
