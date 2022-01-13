import React from "react";
import { Link } from 'react-router-dom';

export default function home () {
    return (
        <><><div class="text-center">
            <h1>Welcome to Dashboard</h1>
        </div><div className="btns">
                <button class="button-30" onClick={popMsg}>Passbook</button><br /><br />
                {/* <button class="button-30" onClick={popTrans}>transaction</button> */}
            </div></><div>
            <Link to="/Login" className="button-17">Login out</Link>
            <br/>
    
            
            </div></>
    )
    function popMsg()  {
        alert('Your balance is..!');
        //alter {balance} table
      }
}