import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Homepage from './homepage';
import VideoShowContainer from './videos/video_show_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link"></Link>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/watch/:videoId" component={VideoShowContainer} />
    </Switch>
  </div>
);

export default App;
