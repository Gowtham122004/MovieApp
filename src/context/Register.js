import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    // ✅ Password regex: at least 6 characters, 1 uppercase, 1 lowercase, 1 digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMsg("Password must be at least 6 characters long and include uppercase, lowercase, and a number.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
      navigate("/home"); // ✅ redirect to home
    } catch (err) {
      setErrorMsg("Registration failed: " + "invalid credentials");
    }
  };

  return (
    <div className="page-container">
      <h2 className="main-heading">Welcome to Movie Recommendation App</h2>
      <div className="form-card">
        <h3>Create Account</h3>
        <form onSubmit={registerUser}>
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
          <button type="submit">Register</button>
        </form>
        { errorMsg && <div className="error">{errorMsg}</div>}
        <br/>
       <p>
  Already have an account? <br/><Link to="/login" className="login-button">Login</Link>
</p>

      </div>
    </div>
  );
};

export default Register;
