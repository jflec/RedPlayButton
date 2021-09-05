import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from "./session_form/session_form_container";
import CreateUserFormContainer from "./user_form/create_user_form_container"
import Home from "./home"

const App = () => {
    return <Switch>
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={CreateUserFormContainer} />
            <Route exact path="/" component={Home} />
    </Switch>
}

export default App;