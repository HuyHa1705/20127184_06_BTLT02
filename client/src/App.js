import './App.css';
import React, { useState, useEffect } from "react";
import Loginformm from "../src/loginformm"

function App() {

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
        ) : (<Loginformm Login={Login} error={error} />)}
    </div>
  );
}

export default App;
