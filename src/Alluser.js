import React, { useState } from "react";
import Axios from "axios";

export default () => {
    const url = "http://localhost:8000/api/v1/account/users";

    const [userList, setUserList] = useState();

    const getUsers = () => {
        
    }

    return (

        <div>
            <button onClick={getUsers}>Show Users</button>
        </div>
    )
}