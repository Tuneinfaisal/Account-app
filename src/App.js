import React , {useState} from "react";
import Menu from "./Menu"
import { Switch,Route,Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Tranction from "./Transaction"

export default () => {
    // const [token, setToken] = useState();
    // if(!token) {
    //     return <Login setToken={setToken} />
    //   }
    return (
        <div>
            <Menu></Menu>
            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Login">
                    <Login/>
                </Route>
                <Route exact path="/Transaction">
                    <Tranction/>
                </Route>

            </Switch>
        </div>
    )
}