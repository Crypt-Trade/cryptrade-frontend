import React from 'react'
import "../css/service.css";
const Service = () => {
  return (
    <>
      <div className='service-container'>
      <div className='container py-5'>
      <h1 className='text-white fw-bold text-center'>- SERVICES -</h1>
      <div className="row g-4 mt-4">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title fw-bold">Advance cryptoknowledge</h5>
            <p className="card-text">Advanced cryptography involves secure algorithms, protocols, and cryptanalysis techniques to protect data, ensure privacy, and enable decentralized security solutions.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title fw-bold">Subscribtion for premium</h5>
            <p className="card-text">Subscribe to premium for exclusive features, enhanced security, and advanced cryptographic insights.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title fw-bold">Meme coin checklist</h5>
            <p className="card-text">A meme coin checklist includes strong community support, viral potential, liquidity, security, and real-world utility.</p>
          </div>
        </div>
      </div>
      <div className="row g-4 mt-3">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title">A future trading call</h5>
            <p className="card-text">A future trading call includes entry price, stop-loss, target levels, risk management, and market analysis.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title">Portfolio management</h5>
            <p className="card-text">Portfolio management includes asset allocation, risk assessment, diversification, rebalancing, and performance tracking.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow servicecard">
            <h5 className="card-title">Liquidation strategy</h5>
            <p className="card-text">A liquidation strategy includes risk assessment, stop-loss placement, margin monitoring, exit planning, and capital preservation.</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default Service