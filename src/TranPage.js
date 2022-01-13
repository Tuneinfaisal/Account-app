import React from "react";
import { CSVLink } from "react-csv";

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



 function home () {
    return (<><div class="text-center">
        <h1>Welcome to Transacation Data</h1>
    </div><div classname="App">
            <CSVLink {...csvreport} class="button-30"> yaha se krle bhai..download..</CSVLink>
        </div></> )}

export default home;