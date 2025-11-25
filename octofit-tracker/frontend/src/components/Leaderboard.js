import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboards, setLeaderboards] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace ? `https://${codespace}-8000.app.github.dev/api/leaderboards/` : '/api/leaderboards/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboards:', data);
        setLeaderboards(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Leaderboard</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboards.map((entry, idx) => (
              <tr key={entry.id || idx}>
                <td>{entry.id || idx + 1}</td>
                <td>{entry.team?.name || entry.team}</td>
                <td>{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
