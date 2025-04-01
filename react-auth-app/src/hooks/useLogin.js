import { useState } from "react";
import axios from "axios";

export const useLogin = (handleSuccessfulAuth) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: formData.email,
            password: formData.password,
          },
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login response:", response.data);

      if (response.data.logged_in) {
        setSuccessMessage("Login successful!");
        setErrorMessage(null);
        setFormData({ email: "", password: "" });
        if (handleSuccessfulAuth) {
          handleSuccessfulAuth(response.data);
        }
      }
    } catch (error) {
      console.error("Login error:", error.response?.data);
      setErrorMessage(error.response?.data?.error || "Login failed");
      setSuccessMessage(null);
    }
  };

  return {
    formData,
    errorMessage,
    successMessage,
    handleChange,
    handleSubmit,
  };
};
