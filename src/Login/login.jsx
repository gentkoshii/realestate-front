import React, { useState } from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import "./login.scss";
import axios from "axios";

function Login() {
  // State variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login page after logout
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7172/api/User/login", { email: username, password });
      console.log('response', response.data);

      if (response.status === 200) {
        const token = response.data.token; // Extracting token
        localStorage.setItem("token", token);
        console.log('token', token);
        window.location.href = "/"; // Redirect to homepage after successful login
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <Navbar />
      <div className="loginSetup">
        <form onSubmit={handleSubmit}>
          <h2>Log Into Real Estate</h2>
          <input
            type="text"
            placeholder="name@example.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" id="loginButton" value="Log In" />
          <a href="signup">Don't Have An Account ?</a>
        </form>
      </div>
      <HomeFooter />
    </div>
  );
}

export default Login;
