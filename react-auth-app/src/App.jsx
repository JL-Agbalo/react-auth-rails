import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});

  const checkLoginStatus = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3001/logged_in", {
        withCredentials: true,
      });
      if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
        console.log("User is logged in:", response.data.user);
        setLoggedInStatus("LOGGED_IN");
        setUser(response.data.user);
      } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
        setLoggedInStatus("NOT_LOGGED_IN");
        setUser({});
      }
    } catch (error) {
      console.error("Error checking login status:", error);
      setLoggedInStatus("NOT_LOGGED_IN");
      setUser({});
    }
  }, [loggedInStatus]);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  const handleSuccessfulAuth = (data) => {
    setLoggedInStatus("LOGGED_IN");
    setUser(data.user);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.delete("http://localhost:3001/logout", {
        withCredentials: true,
      });
      if (response.data.logged_out) {
        setLoggedInStatus("NOT_LOGGED_IN");
        setUser({});
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link
                to="/"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleSuccessfulAuth={handleSuccessfulAuth}
                  loggedInStatus={loggedInStatus}
                  user={user}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  loggedInStatus={loggedInStatus}
                  user={user}
                  handleLogout={handleLogout}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
