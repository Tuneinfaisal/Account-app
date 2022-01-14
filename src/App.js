import React , {useState} from "react";
import Menu from "./Menu"
import { Switch,Route,Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register"
import TranPage from "./TranPage"

export default () => {
    // const [token, setToken] = useState();
    // if(!token) {
    //     return <Login setToken={setToken} />
    //   }
    return (
        <div>
            <Menu></Menu>
            <Switch>

                <Route exact path="/Home">
                    <Home/>
                </Route>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route exact path="/Register">
                    <Register/>
                </Route>
                <Route exact path="/TranPage">
                    <TranPage/>
                </Route>

            </Switch>
        </div>
    )
}