import React from 'react'

const Weeklypayout = () => {
  return (
   <>
    <div className="container mt-4">
        <h3 className="mb-3 text-center">Weekly payouts</h3>
        <table className="table table-bordered text-center">
            <thead className="table-success">
                <tr>
                    <th>S/N</th>
                    <th>Week</th>
                    <th>Payout Amount</th>
                    <th>Payout Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Week 1</td>
                    <td>$500</td>
                    <td>Paid</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Week 2</td>
                    <td>$450</td>
                    <td>Pending</td>
                </tr>
              
               
            </tbody>
        </table>
    </div>
   </>
  )
}

export default Weeklypayout