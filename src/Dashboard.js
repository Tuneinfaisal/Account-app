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
                    <Link to="/Passbook" class="button-30" >Passbook</Link>
                    <br />
                    <div>
                        <Link to="/Alluser" className="button-30" >{" "}Get All user list{" "} </Link>
                    </div>
                    <br />
                </div>
            </>
            <div>
                {/* <button className="button-30" onClick={tracsactionHandler}>Transaction page</button> */}
                <Link to="/TranPage" className="button-30" >{" "}
                    Transaction Page{" "}
                </Link>
                <Link to="/" className="button-17">Log out</Link>
                <br />
            </div>
        </>
    );
    function popMsg() {
        alert("Your balance is..!");
        //alter {balance} table
    }
}
