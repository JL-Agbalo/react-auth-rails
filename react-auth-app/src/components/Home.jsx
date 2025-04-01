import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";

function Home({ handleSuccessfulAuth, loggedInStatus, user }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("register");

  const handleAuth = (data) => {
    handleSuccessfulAuth(data);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("register")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "register"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Register
        </button>
        <button
          onClick={() => setActiveTab("login")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "login"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Login
        </button>
      </div>

      <div className="px-4 py-6 sm:px-0">
        {activeTab === "register" ? (
          <Registration handleSuccessfulAuth={handleAuth} />
        ) : (
          <Login handleSuccessfulAuth={handleAuth} />
        )}
      </div>
    </div>
  );
}

export default Home;
