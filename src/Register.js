import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Login() {
    const [username, setUserName] = useState();
    const [balance, setBalance] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.username;
        if(name == "") {
            alert("must be filled");
        }
    }
    return (
        <>
            <div className="login-wrapper">
                <h1>Sign up</h1>
                <form name="registerForm" onSubmit={handleSubmit}>
                    <label>
                        <p>Name</p>
                        <input type="text" 
                        onChange={e => setUserName
                        (e.target.value)} name="uname" required />
                    </label>
                    <br/><br/>
                    <label>
                        <p>Balance</p>
                        <input type="text" 
                        onChange={e => setBalance
                        (e.target.value)} required />
                    </label>
                    <br/><br/>
                    <label>
                        <p>Password</p>
                        <input type="password" 
                        onChange={e => setPassword
                        (e.target.value)} required />
                    </label>
                    <br/><br/>
                    <div>
                        {/* <button type="submit" onClick={Home}>Login</button> */}
                        <Link to="/" className="btn btn-primary" type="submit" >Signup</Link>
                    </div>
                </form>
            </div>
        </>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}