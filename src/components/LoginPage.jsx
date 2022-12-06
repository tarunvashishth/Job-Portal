import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleApi(e) {
    e.preventDefault();

    axios
      .post("https://jobs-api.squareboat.info/api/v1/auth/login", {
        email: email, 
        password: password
      })
      .then((result) => {
        localStorage.setItem('token', result.data.data.token)
        navigate('/jobs')
      })
      .catch((error) => {
        console.log(error);
      });
  }
   
  return (
    <>
      <div className="login-page">
        <div className="login-banner">
          <Navbar name={email} />
        </div>
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-design">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-design">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleApi} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
