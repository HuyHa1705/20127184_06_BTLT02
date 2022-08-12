import './App.css';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Firstpage from './firstpage';

function Forgot({ Forgot }) {
    const [details, setDetails] = useState({ email: "" })

    const submitHandler = e => {
        e.preventDefault();
        console.log(details);
        if (details.email != "") {
            alert("Send Email Success")
        }
        else {
            alert("Please Enter an Email")
        }


    }


    return (
        <>
            <div class="Temp" >
                <div class="forgot">
                    <form onSubmit={submitHandler}>
                        <div class="form-inner">
                            <h2 class="temp">FORGOT<br /> PASSWORD</h2>
                            <div class="form-group"><br />
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                            </div>
                            <input type="submit" value="SUBMIT" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Forgot