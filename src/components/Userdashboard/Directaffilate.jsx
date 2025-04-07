import React,{useState,useEffect} from 'react'
import axios from 'axios';


const Directaffilate = () => {
    const sponsorId = sessionStorage.getItem("mySponsorId");
    const [referrals, setReferrals] = useState([]); // State to hold API data
    const [loading, setLoading] = useState(true);   // State for loading status
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  useEffect(() => {
    // Fetch referral data from the API
    axios.post(`${ROOT_URL}/user/directreffers`, { sponsorId }) // replace with actual sponsorId
      .then(response => {
        setReferrals(response.data); // Set the referral data
        setLoading(false); // Data loading complete
      })
      .catch(error => {
        console.log(error);
        // setError('Failed to fetch referral data');
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
        <div className="container mt-4">
        <h3 className="mb-3 text-center">Direct affiliate</h3>
        <table className="table table-bordered text-center">
            <thead className='table-success'>
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>User ID</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
            {referrals.length > 0 ? (
    <>
  {referrals.map((referral , index) => (
            <tr  key={referral._id}>
            <td>{index + 1}</td>
            <td>{referral.name}</td>
              <td className='p-2'>{referral.mySponsorId}</td>
              
              <td>{referral.mobileNumber}</td>
            </tr>
          ))}
          </>
  ): (<tr>
              <td colSpan="5" className="text-center">No direct team found</td>
            </tr>
          )}
              
               
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Directaffilate