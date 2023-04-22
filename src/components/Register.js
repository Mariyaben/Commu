import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./24.png";
import "../App.css";
import axios from "axios";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/user", {
        name: name,
        phone: phone,
        email: email,
        date: date,
        pass: pass,
      });

      console.log(response.data);
      // handle successful response
    } catch (error) {
      console.error(error);
      // handle error response
    }
  };

  return (
    <>
      <div className="machu">
        <div className="auth-form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2 className="form-title1">Signup</h2>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              placeholder="Name"
              id="name"
              name="name"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder="Phone Number"
              id="phone"
              name="phone"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="yourmail@gmail.com"
              id="email"
              name="email"
            />
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Set Password"
              id="password"
              name="password"
            />
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="Date of Birth"
              id="date"
              name="date"
            />

            <button type="submit">Register</button>
          </form>

          <NavLink to="/login" className="signup-image-link">
            Sign in{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
};

function CreateRegisterPageWrapper() {
  return (
    <div className="create-register-page-wrapper">
      <Register />
    </div>
  );
}

export default CreateRegisterPageWrapper;
