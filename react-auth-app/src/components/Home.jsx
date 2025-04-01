import React from "react";
import { useNavigate } from "react-router-dom";
import Registration from "./auth/Registration";

function Home({ handleSuccessfulAuth, loggedInStatus, user }) {
  const navigate = useNavigate();

  const handleAuth = (data) => {
    handleSuccessfulAuth(data);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1>Status: {loggedInStatus}</h1>
      <div className="px-4 py-6 sm:px-0">
        <Registration handleSuccessfulAuth={handleAuth} />
      </div>
    </div>
  );
}

export default Home;
