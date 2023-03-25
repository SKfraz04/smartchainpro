import React, { useState } from "react";
import "./Suscribe.css";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateName = () => {
    if (name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameError || emailError) {
      alert("Please fix the errors before submitting the form");
    } else {
      alert("Thank you for subscribing!");
      setName("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="suscribe-form my-5">
      <div>
        <label htmlFor="name"></label>
        <input
          className="suscribe-input"
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          onBlur={validateName}
        />
        {nameError && <span>{nameError}</span>}
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          className="suscribe-input"
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          onBlur={validateEmail}
        />
        {emailError && <span>{emailError}</span>}
      </div>
      <button className="commonbutton" type="submit">
        Subscribe
      </button>
    </form>
  );
};

export default Subscribe;
