import { useState } from "react";
import axios from "axios";

export const useRegistration = (handleSuccessfulAuth) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.confirmPassword,
          },
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Registration response:", response.data);

      if (response.data.status === "created") {
        setSuccessMessage("Registration successful!");
        setErrorMessage(null);
        setFormData({ email: "", password: "", confirmPassword: "" });
        if (handleSuccessfulAuth) {
          handleSuccessfulAuth(response.data);
        }
      }
    } catch (error) {
      console.error("Registration error:", error.response?.data);
      setErrorMessage(error.response?.data?.error || "Registration failed");
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
