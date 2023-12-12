import React, { useState } from "react";
import axios from 'axios';

const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Login"
    />
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username, 
        password,
      }); //pass in object of username and password for the request.
        alert("Registration Completed, please login.");
    } catch (err) {
      console.error(err); //makes error red.
    }
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Register"
      onSubmit={onSubmit}
    />
  );
};

//The form has passed in props.
const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <h2>{label}</h2>
        <div className="form-group">
          {/* html for refers to the input with the id called username */}
          <label htmlFor="username"> Username: </label>
          {/* The onchange event sets the username state to the value of the field anytime there's changes to the value in the field.  */}
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          {/* html for refers to the input with the id called username */}
          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit"> {label}</button>
      </form>
    </div>
  );
};

export default Auth;
