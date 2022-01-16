import React, { useState } from "react";
import Axios from "axios";
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Login() {
    const [name, setName] = useState();
    const [balance, setBalance] = useState();
    const [password, setPassword] = useState();

    const url = "http://localhost:8000/api/v1/account/s"

    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post(url,{
            name: name,
            balance: balance,
            password: password
        })
        
        alert("Your data is saved");
    }
    return (
        <>
            <div>
                <h1>Sign up</h1>
                <label>
                    <p>Name</p>
                    <input type="text" 
                    onChange={e => setName
                    (e.target.value)} value={name} required />
                </label>
                <br/><br/>
                <label>
                    <p>Balance</p>
                    <input type="text" 
                    onChange={e => setBalance
                    (e.target.value)} 
                    value={balance}
                    required />
                </label>
                <br/><br/>
                <label>
                    <p>Password</p>
                    <input type="password" 
                    
                    onChange={e => setPassword
                    (e.target.value)} value={password} required />
                </label>
                <br/><br/>
                
                <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
                
            </div>
        </>)}
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }