import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import photoBg from "../images/backgroung/login-bg.jpg";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";

    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrors({});

    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:5000/api/auth/login", formData);

        login(response.data.token, response.data.user);

        setSuccessMessage("Login Successful!");
        setFormData({ email: "", password: "" });

        setTimeout(() => {
          navigate("/help");
        }, 1500);
      } catch (error) {
        setErrors({ general: "Invalid email or password. Please try again!" });
      }
    }
  };

  if (isLoggedIn) {
    return (
      <div
        className="login-wrapper"
        style={{
          backgroundImage: `url(${photoBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="login-container">
          <h2>Welcome Back!</h2>
          <p className="success">You are already logged in.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="login-wrapper"
      style={{
        backgroundImage: `url(${photoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="login-container">
        <h2>Login & Get Support</h2>
        {successMessage && <p className="success">{successMessage}</p>}
        {errors.general && <p className="error">{errors.general}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              className="transparent-input"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              className="transparent-input"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
