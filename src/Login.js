import './App.css';
import React, { useState, useEffect } from "react";
import Forgot from './forgot';
import { Link } from 'react-router-dom';


const Login = props => {
  const [backendData, setbackendData] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    fetch("/api").then(
      responce => responce.json()
    ).then(
      data => {
        setbackendData(data)
        backendData.email = data.email
        backendData.password = data.password
      }
    )
  }, [])

  const [details, setDetails] = useState({ email: "", password: "" })

  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details);

    if (details.email == backendData.email && details.password == backendData.password) {
      console.log("Logged In");
      setUser({
        name: backendData.name,
        email: details.email
      });
    }
    else {
      console.log("Email or Password dosen't match!!")
      setError("Email or Password dosen't match!!");
    }
  }

  const Logout = details => {
    setUser({ name: "", email: "" });
    setError("");
  }

  return (

    <div class="Temp">
      {(user.email != "") ?
        (
          <div class="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (<>

          <form onSubmit={submitHandler}>
            <div class="form-inner">
              <button class="close" onClick={props.handleClose}>Close</button>
              <h2 class="temp">LOGIN</h2>
              {(error != "") ? (<div class="error"><br />{error}</div>) : ""}
              <div class="form-group"><br />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
              </div>
              <div class="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
              </div>
              <input type="submit" value="LOGIN" />
              <button class="fg" onClick={() => window.open("/forgot", "_blank")} >Forgot Password </button>
            </div>
          </form>
        </>)
      }
    </div>
  );
}

export default Login
