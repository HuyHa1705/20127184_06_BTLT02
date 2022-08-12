import './App.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Password = props => {
    const [details, setDetails] = useState({ password: "", passwordagain: "" })

    const submitHandler = e => {
        e.preventDefault();
        changepass(details);
    }

    const [error, setError] = useState("");

    const changepass = details => {
        if (details.passwordl != "" != "" && details.password != details.passwordagain) {
            console.log("Password do not matched!!")
            setError("Password do not matched!!")
        }
        else if (details.password == "" && details.passwordagain == "") {
            console.log("Please enter a Password!!")
            setError("Please enter a Password!!")
        }
    }

    return (

        <div class="Temp">
            <form onSubmit={submitHandler}>
                <div class="form-inner">
                    <h2 class="temp">Register</h2>
                    {(error != "") ? (<div class="error"><br />{error}</div>) : ""}
                    <br />
                    <div class="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="passwordagain">Input Password Again:</label>
                        <input type="password" name="passwordagain" id="passwordagain" onChange={e => setDetails({ ...details, passwordagain: e.target.value })} value={details.passwordagain} />
                    </div>
                    <input type="submit" value="SUBMIT" />
                </div>
            </form>
        </div>
    );
}

export default Password