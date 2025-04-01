import React from "react";
import { Navigate } from "react-router-dom";

function Dashboard({ loggedInStatus, user }) {
  if (loggedInStatus !== "LOGGED_IN") {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="space-y-4">
        <div>
          <p className="text-gray-600">Status: {loggedInStatus}</p>
          <p className="text-gray-600">Welcome, {user.email}</p>
        </div>
        {Object.keys(user).length > 0 && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">User Information</h2>
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
