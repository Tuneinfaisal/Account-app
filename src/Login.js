import { useState } from "react";
import { Link } from "react-router-dom";
export default function Form() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || password === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    const sucessMsg = () => {
        return (
            <div
                className="success"
                style={{ display: submitted ? "" : "none" }}
            >
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1> Enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div className="messages">
                {errorMessage()}
                {sucessMsg()}
            </div>

            <form>
                <label className="label">Name</label>
                <input
                    onChange={handleName}
                    className="input"
                    value={name}
                    type="text"
                />
                <br />
                <br />
                <label className="label">Password</label>
                <input
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    type="password"
                />
                <br />

                {/* <button onClick={handleSubmit} className="button-17" type="submit">Login</button> */}
                <Link to="/Dashboard" className="btn btn-primary" >
                    Login here
                </Link>
            </form>
        </div>
    );
}
