import React from "react";
import { Link } from "react-router-dom";

export default function home() {

    // const tracsactionHandler = (e) => {
    //     e.preventDefault();
    //     return(
    //             <Link to="./"></Link>
    //     )
    // }
    
    return (
        <>
            <>
                <div class="text-center">
                    <h1>Welcome to Dashboard</h1>
                </div>
                <div className="btns">
                    <button class="button-30" onClick={popMsg}>
                        Passbook
                    </button>
                    <br />
                    <br />
                </div>
            </>
            <div>
                {/* <button className="button-30" onClick={tracsactionHandler}>Transaction page</button> */}
                <Link to="/" className="button-30" >
                    {" "}
                    Transaction Page{" "}
                </Link>
                <Link to="/" className="button-17">
                    Log out
                </Link>
                <br />
            </div>
        </>
    );
    function popMsg() {
        alert("Your balance is..!");
        //alter {balance} table
    }
}
