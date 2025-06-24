import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    
      navigate("/home"); // ✅ go to homepage
    } catch (err) {
      setErrorMsg("Login failed: " + "Invalid credentials");
    }
  };

  return (
    <div className="page-container">
      <h2 className="main-heading">Welcome to Movie Recommendation App</h2>
      <div className="form-card">
        <h3>Login</h3>
        <form onSubmit={loginUser}>
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        { errorMsg&& <div className="error">{errorMsg}</div>}
        <br/>
        <p>
          Don’t have an account?<br/> <Link to="/" className="register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
