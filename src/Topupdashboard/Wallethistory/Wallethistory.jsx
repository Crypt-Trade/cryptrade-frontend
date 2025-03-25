import React from 'react'

const Wallethistory = () => {
  return (
    <>
        <div className="container mt-4">
        <h3 className="mb-3 text-center">Wallet History</h3>
        <table className="table table-bordered text-center">
            <thead className='table-success'>
                <tr>
                    <th>S/N</th>
                    <th>Order No</th>
                    <th>Amount($)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>123456</td>
                    <td>12345</td> 
                </tr>  
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Wallethistory