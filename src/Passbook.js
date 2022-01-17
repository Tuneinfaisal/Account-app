import React, { useState } from "react";
import { CSVLink } from "react-csv";
import axios, { Axios }  from "axios";

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
    filename: 'Backend data.csv'
  };

export default function home() {
  
  // const [transaction, setTransaction] = useState("");
  // const getTransaction = () => {
  //   axios.get("/api/v1/account/asif/passbook").then((response) =>{
  //     setTransaction(response)
  //   })
  // }

    return (
        <><div class="text-center">
            <h1>Welcome to Passbook page</h1>
            <br />
        </div><div classname="App">
                <CSVLink {...csvreport} class="button-30">Download data</CSVLink>
                {/* <button class="button-30">Download</button> */}
            </div></>
    )}
