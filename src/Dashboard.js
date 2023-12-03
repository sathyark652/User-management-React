// Dashboard.js
import React from 'react';

const Dashboard = ({ editedCount, deletedCount }) => {
  return (
    <div className="dashboard">
      <div>
        <strong>Edited Count:</strong> {editedCount}
      </div>
      <div>
        <strong>Deleted Count:</strong> {deletedCount}
      </div>
    </div>
  );
};

export default Dashboard;
