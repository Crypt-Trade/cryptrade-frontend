import React, { useEffect, useState } from 'react';
import axios from 'axios';

const rewardData = [
  { sl: 1, rank: 'Starter Rank', left: 100, right: 100, reward: 'Mobile Cover/USDT' },
  { sl: 2, rank: 'Master Rank', left: 500, right: 500, reward: 'Boat AirPods' },
  { sl: 3, rank: 'Bronze Rank', left: 1000, right: 1000, reward: 'Wrist watch' },
  { sl: 4, rank: 'Silver Rank', left: 2500, right: 2500, reward: 'Android Tab' },
  { sl: 5, rank: 'Gold Rank', left: 5000, right: 5000, reward: 'iPhone' },
  { sl: 6, rank: 'Crystal Rank', left: 7500, right: 7500, reward: 'Macbook' },
  { sl: 7, rank: 'Sapphire Rank', left: 10000, right: 10000, reward: 'Gold bracelet' },
  { sl: 8, rank: 'Ruby Rank', left: 15000, right: 15000, reward: 'Avenger bike' },
  { sl: 9, rank: 'Platinum Rank', left: 20000, right: 20000, reward: 'Royal Enfield' },
  { sl: 10, rank: 'Diamond Rank', left: 25000, right: 25000, reward: 'Rolex watch' },
  { sl: 11, rank: 'Black Diamond Rank', left: 50000, right: 50000, reward: 'Swift Dzire car' },
  { sl: 12, rank: 'Millionaire Club rank', left: 100000, right: 100000, reward: '7 seater SUV/20 lakhs' },
  { sl: 13, rank: 'Tycoon rank', left: 200000, right: 200000, reward: 'AUDI Car/30 lakhs' },
  { sl: 14, rank: 'Unicorn rank', left: 300000, right: 300000, reward: 'Bungalow/50 lakhs' },
  { sl: 15, rank: 'Cryptrade King', left: 500000, right: 500000, reward: 'Mercedes-Benz/1 Cr' },
];

const Reward = () => {
  const [rankStatusMap, setRankStatusMap] = useState({});
 const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL || "http://localhost:5000";
 
  const mysponsorid = sessionStorage.getItem('mySponsorId');
  useEffect(() => {
    const fetchRankData = async () => {
      try {
        const response = await axios.post(`${ROOT_URL}/user/ranking`,{mysponsorid});
          
        

        // Create a map: rank name → status
       
   const rankingDetails = response.data?.userRank?.ranking_details;

    if (Array.isArray(rankingDetails)) {
      const statusMap = {};
      const seenRanks = new Set();

      rankingDetails.forEach(({ rank_name, status }) => {
        if (!seenRanks.has(rank_name)) {
          statusMap[rank_name] = status;
          seenRanks.add(rank_name);
        }
      });

      setRankStatusMap(statusMap);
    } else {
      console.warn("ranking_details not found in userRank:", response.data);
      setRankStatusMap({});
    }

  } catch (err) {
    console.error('Failed to fetch ranking data', err);
  }
};

    fetchRankData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Rank & Rewards</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center align-middle" style={{borderRadius: '10px'}}>
          <thead className="table-primary">
            <tr>
              <th>SL</th>
              <th>Rank Name</th>
              <th>Left Point</th>
              <th>Right Point</th>
              <th>Rewards</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rewardData.map(({ sl, rank, left, right, reward }) => (
              <tr key={sl}>
                <td>{sl}</td>
                <td>{rank}</td>
                <td>{left.toLocaleString()}</td>
                <td>{right.toLocaleString()}</td>
                <td>{reward}</td>
                <td>
  {(() => {
    const status = rankStatusMap[rank] || 'Not Achieved';
    const badgeClass =
      status === 'Claimed'
        ? 'text-success'
        : status === 'unclaimed'
        ? 'text-danger'
        : 'text-dark';

    return <span className={badgeClass}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>;
  })()}
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reward;
