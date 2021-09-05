import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mSTP = (state) => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}

const Auth = ({ loggedIn, exact, path, component: Component }) => {
    return (
        <Route
            exact={exact}
            path={path}
            render={(props) => {
                if (loggedIn) {
                    return <Redirect to="/" />
                } else {
                    return <Component {...props} />
                }
        }} />
    )
}

const Protected = ({ loggedIn, exact, path, component: Component }) => {
    return (
        <Route
            exact={exact}
            path={path}
            render={(props) => {
                if (!loggedIn) {
                    return <Redirect to="/login" />
                } else {
                    return <Component {...props} />
                }
            }}
        />
    )
}

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));