import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/userdashboard/allpackage.css";

const Allpackages = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState("");
  const [showDeposit, setShowDeposit] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const depositAddress = "0x1234567890abcdef1234567890abcdef12345678"; // Example deposit address

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

  const handleSubmit = () => {
    if (screenshot) {
      navigate("/userdashboard/buynow");
    } else {
      alert("Please upload a screenshot before submitting.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Kick Starter Package */}
        <div className="col-md-3 my-4">
          <div className="card cardpackage h-100">
            <div className="card-body d-flex flex-column">
              <h3 className="text-center fw-bold">Kick Starter</h3>
              <div className="fw-bold h5 text-center">50 USDT</div>
              <div className="flex-grow-1">
                <div className="kick">🌟 Basic trading knowledge</div>
                <div className="kick">🌟 Meme coin name</div>
                <div className="kick">🌟 1-month subscription for premium</div>
                <div className="kick">🌟 Bonus 1-2 long-term GEM coin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bull Starter Package */}
        <div className="col-md-3 my-4">
          <div className="card cardpackage h-100">
            <div className="card-body d-flex flex-column">
              <h3 className="text-center fw-bold">Bull Starter</h3>
              <div className="fw-bold h5 text-center">100 USDT</div>
              <div className="flex-grow-1">
                <div className="kick">🌟 Advance crypto knowledge</div>
                <div className="kick">🌟 Meme coin checklist</div>
                <div className="kick">
                  🌟 3-month subscription for premium group
                </div>
                <div className="kick">🌟 Future trading call</div>
                <div className="kick">🌟 Bonus 5 long-term holding</div>
              </div>
            </div>
          </div>
        </div>

        {/* Whales Starter Package */}
        <div className="col-md-3 my-4">
          <div className="card cardpackage h-100">
            <div className="card-body d-flex flex-column">
              <h3 className="text-center fw-bold">Whales Starter</h3>
              <div className="fw-bold h5 text-center">500 USDT</div>
              <div className="flex-grow-1">
                <div className="kick">
                  🌟 Master trading skill + lifetime asset
                </div>
                <div className="kick">🌟 1-year subscription premium group</div>
                <div className="kick">🌟 10 GEM coin name</div>
                <div className="kick">🌟 Portfolio management</div>
                <div className="kick">🌟 Future trade call</div>
                <div className="kick">🌟 Liquidation strategy</div>
                <div className="kick">🌟 Future scalping</div>
                <div className="kick">🌟 20 long-term coin name</div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Subscription (Add-On) */}
        <div className="col-md-3 my-4">
          <div className="card cardpackage h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="text-center fw-bold">Monthly subscription</h5>
              <h5 className="text-center fw-bold">(Add On)</h5>
              <div className="fw-bold h5 text-center">25 USDT</div>
              <div className="flex-grow-1">
                <div className="kick">🌟1-month subscription for premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center my-3'>
                <div className='mt-2'>Select Any Package:</div>
                <div className='ms-3'>
                    <select className="form-select" onChange={handlePackageChange}>
                        <option value="">Select Package</option>
                        <option value="kickstarter">Kickstarter: 50 USDT</option>
                        <option value="bull">Bull: 100 USDT</option>
                        <option value="whales">Whales: 500 USDT</option>
                        <option value="monthly">Monthly: 25 USDT</option>
                    </select>
                </div>
            </div>
      {/* Deposit Section */}
      {selectedPackage && (
        <div className="d-flex justify-content-center my-5" >
        <div className="card p-3 mt-3 w-50 rounded-3">
          <h5 className="text-center">Confirm Your Deposit</h5>
          {!showDeposit ? (
            <div className="text-center py-4">
            <button className="btn btn-primary w-25 " onClick={handleDepositClick}>
              Deposit
            </button>
            </div>
          ) : (
            <>
              <div className="mt-2">
                <label>Deposit Address:</label>
                <input
                  type="text"
                  className="form-control"
                  value={depositAddress}
                  readOnly
                />
              </div>
              <div className="mt-3">
                <label>Upload Screenshot:</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>
              <div>
              <div className="text-center">
              <button className="btn btn-primary mt-3 w-25" onClick={handleSubmit}>
                Submit
              </button>
              </div>

              </div>
            </>
          )}
        </div>
        </div>
      )}
    </div>
  );
};

export default Allpackages;
