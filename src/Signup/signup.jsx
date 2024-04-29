import React, { useState } from "react";
import Navbar from "../Components/navbar";
import HomeFooter from "../Components/homeFooter";
import "./signup.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate()
  // State variables for sign-up form fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend endpoint
      const response = await axios.post("https://api-lazbjamuma-ez.a.run.app/api/User/register", {
        username,
        email,
        phoneNumber,
        password,
        confirmPassword
      });
      if(response.status == 200) {
        navigate("/login")
      } else {
        console.error("error ")
      }
      console.log("Sign up successful:", response.data);
      // Handle successful sign-up, such as redirecting to login page
    } catch (error) {
      console.error("Sign up failed:", error);
      // Handle sign-up error, such as displaying an error message to the user
    }
  };

  return (
    <div className="signUp">
      <Navbar />
      <div className="signUpSetup">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up Into Real Estate</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        
      
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input type="submit" id="Submit" value="Sign Up" />
        </form>
      </div>
      <HomeFooter />
    </div>
  );
}

export default SignUp;
