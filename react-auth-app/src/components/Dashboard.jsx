import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Dashboard({ loggedInStatus, user, handleLogout }) {
  const navigate = useNavigate();

  if (loggedInStatus !== "LOGGED_IN") {
    return <Navigate to="/" />;
  }

  const handleLogoutClick = async () => {
    await handleLogout();
    navigate("/");
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogoutClick}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
        >
          Logout
        </button>
      </div>
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
