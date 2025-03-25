import React from 'react'

const Wallet = () => {
  return (
    <>
        <div className="container mt-4">
        <h3 className="mb-3 text-center">My Orders</h3>
        <table className="table table-bordered text-center">
            <thead className="table-success">
                <tr>
                    <th>S/N</th>
                    <th>Wallet name</th>
                    <th>Wallet address</th>
                  
                   
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    
                    <td>test</td>
                    <td>example123</td>
                </tr>
                
              
               
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Wallet