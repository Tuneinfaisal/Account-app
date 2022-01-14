import React from "react";
import { CSVLink } from "react-csv";


//this is DEMO data to test the export CSV file getting saved to system... 
const headers = [
    { label: "Name", key: "Name" },
    { label: "Balance", key: "Balance" },
    { label: "Password", key: "Password" }
  ];
  const data = [
    { Name: "ankit", Balance: 10000, Password: "abc" },
    { Name: "nonganba", Balance: 20000, Password: "pqr" },
    { Name: "faisal", Balance: 30000, Password: "lmn" },
    { Name: "asif", Balance: 40000, Password: "xyz" }
  ];
  const csvreport = {
    data: data,
    headers: headers,
    filename: 'Apna backend ka data.csv'
  };
{/* <>
<li> Name: "ankit", Balance: 10000, Password: "abc"   </li>
<li>  Name: "nonganba", Balance: 20000, Password: "pqr"   </li>
<li> Name: "faisal", Balance: 30000, Password: "lmn"  </li>
<li> Name: "asif", Balance: 40000, Password: "xyz"   </li></> */}

const btnhandle = (e) => {
  e.preventDefault();
  alert("wait we are fetching your data....");
}
 function home () {
    return (<><div class="text-center">
        <h1>Welcome to Transacation Data</h1>
    </div><div classname="App">
            <CSVLink {...csvreport} class="button-30">Download your data</CSVLink>
        </div>
        <label><p>Amount</p><input type="number"/></label><br/><br/>
        <div>
        <input type="radio" value="Deposit" name="type" /> Deposit
        <input type="radio" value="Withdraw" name="type" /> Withdraw
        <br/><br/></div>
        <button className="button-30" type="submit" onClick={btnhandle}>Proceed</button>
        
      </> )}

export default home;