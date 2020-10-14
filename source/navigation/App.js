// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from '../pages';
import { Switch, Route, Redirect } from 'react-router-dom';
import { book } from './book';

@hot(module)
export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path={book.login} component={Login} />
                <Route path={book.signUp} component={Signup} />
                <Route path={book.feed} component={Feed} />
                <Route path={book.profile} component={Profile} />
                <Route path={book.newPassword} component={NewPassword} />
                <Redirect to={book.login} />
            </Switch>
        );
    }
}
