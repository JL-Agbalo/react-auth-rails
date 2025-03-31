import React from "react";

function Dashboard() {
  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to your Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Quick Stats</h3>
            <p className="text-gray-600">Your activity overview</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Recent Activity</h3>
            <p className="text-gray-600">Latest updates and changes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
