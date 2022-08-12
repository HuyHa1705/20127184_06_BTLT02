import './App.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Registerfor = props => {
    const [backendData, setbackendData] = useState({ email: "" });

    useEffect(() => {
        fetch("/api").then(
            responce => responce.json()
        ).then(
            data => {
                setbackendData(data)
                backendData.email = data.email
            }
        )
    }, [])

    const [details, setDetails] = useState({ email: "", password: "", passwordagain: "" })

    const submitHandler = e => {
        e.preventDefault();
        Register(details);
    }

    const [error, setError] = useState("");

    const Register = details => {
        console.log(details);
        if (details.email == backendData.email && details.email != "") {
            console.log("Email existed!!")
            setError("Email existed!!");
        }
        else if (details.email != "" && details.password != details.passwordagain) {
            console.log("Password do not matched!!")
            setError("Password do not matched!!")
        }
        else if (details.email == "" && details.password != "") {
            console.log("Please enter an email!!")
            setError("Please enter an email!!")
        }
    }

    return (

        <div class="Temp">
            <form onSubmit={submitHandler}>
                <div class="form-inner">
                    <button class="close" onClick={props.handleClose}>Close</button>
                    <h2 class="temp">Register</h2>
                    {(error != "") ? (<div class="error"><br />{error}</div>) : ""}
                    <div class="form-group"><br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="passwordagain">Input Password Again:</label>
                        <input type="password" name="passwordagain" id="passwordagain" onChange={e => setDetails({ ...details, passwordagain: e.target.value })} value={details.passwordagain} />
                    </div>
                    <input type="submit" value="REGISTER" />
                </div>
            </form>
        </div>
    );
}

export default Registerfor