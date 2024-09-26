import { useState, useEffect } from 'react';

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);

  // Replace with your LeetCode username
  const username = "valusoutrik";


  useEffect(() => {
    // Function to fetch data from LeetCode API
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);

        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchLeetCodeStats();
  }, [username]);
  if (stats != null) {
    return (
      <iframe
        src="https://leetcard.jacoblin.cool/valusoutrik"
        title="LeetCode Stats Card"
        style={{ width: '100%', height: '300px', border: 'none' }}
      ></iframe>
    );

  }
  else return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

export default LeetCodeStats;
