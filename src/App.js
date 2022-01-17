import React , {useState} from "react";
import Menu from "./Menu"
import { Switch,Route,Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register"
import TranPage from "./TranPage"
import Dashboard from "./Dashboard"
import Passbook from "./Passbook"
import Alluser from "./Alluser";

export default () => {
    const [name , setName] = useState()
    return (
        <div>
            <Menu></Menu>
            <Switch>

                <Route exact path="/Home">
                    <Home/>
                </Route>
                <Route exact path="/">
                    <Login setName={setName}/>
                </Route>
                <Route exact path="/Register">
                    <Register/>
                </Route>
                <Route exact path="/TranPage">
                    <TranPage name = {name}/>
                </Route>
                <Route exact path="/Dashboard">
                    <Dashboard name = {name} setName={setName}/>
                </Route>
                <Route exact path="/Passbook">
                    <Passbook/>
                </Route>
                <Route exact path="/Alluser">
                    <Alluser/>
                </Route>

            </Switch>
        </div>
    )
}