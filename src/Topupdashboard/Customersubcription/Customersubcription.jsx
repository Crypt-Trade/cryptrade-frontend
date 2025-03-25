import React from 'react'

const Customersubcription = () => {
  return (
    <>
        <div className="container mt-4">
        <h3 className="mb-3 text-center">Customer subcription history</h3>
        <table className="table table-bordered text-center">
            <thead className='table-success'>
                <tr>
                    <th>S/N</th>
                    <th>Order No</th>
                    <th>Customer Name</th>
                    <th>User ID</th>
                    <th>Package name</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>123456</td>
                    <td>Test</td>
                    <td>12345</td>
                    <td>Kick starter</td>
                </tr>  
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Customersubcription