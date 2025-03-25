import React from 'react'

const Reports = () => {
  return (
  <>
    <div className="container mt-4">
        <h3 className="mb-3 text-center">My Orders</h3>
        <table className="table table-bordered text-center">
            <thead className="table-success">
                <tr>
                    <th>S/N</th>
                    <th>Order date</th>
                    <th>Package name</th>
                    <th>Package amount</th>
                   
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>20/03/2025</td>
                    <td>Kick starter</td>
                    <td>50 USDT</td>
                </tr>
                
              
               
            </tbody>
        </table>
    </div>
  </>
  )
}

export default Reports