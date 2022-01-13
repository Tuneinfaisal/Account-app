import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    return (
        <>
            <div className="login-wrapper">
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Name</p>
                        <input type="text" 
                        onChange={e => setUserName
                        (e.target.value)} />
                    </label>
                    <br/><br/>
                    <label>
                        <p>Balance</p>
                        <input type="password" 
                        onChange={e => setPassword
                        (e.target.value)} />
                    </label>
                    <br/><br/>
                    <label>
                        <p>Password</p>
                        <input type="password" 
                        onChange={e => setPassword
                        (e.target.value)} />
                    </label>
                    <br/><br/>
                    <div>
                        {/* <button type="submit" onClick={Home}>Login</button> */}
                        <Link to="/" className="btn btn-primary">Signup</Link>
                    </div>
                </form>
            </div>
           </>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}