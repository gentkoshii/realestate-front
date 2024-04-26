import React, { useState } from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import "./login.scss";
import axios from "axios";

function Login() {
  // State variables for username and password
  const [username, setUsername] = useState("zeri@example.com");
  const [password, setPassword] = useState("Password123!");


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    let token
    try {
        const response = await axios.post("https://localhost:7172/api/User/login", { email: username, password });
      if (response.success) {
        token = response.token
      }
      localStorage.setItem("token", token)
      console.log(token)
    } catch (error) {
      console.log(error)
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
            placeholder="zeri@example.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password123!"
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
