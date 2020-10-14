// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from '../pages';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { book } from './book';
import { selectIsAuthenticated } from '../bus/auth/selectors';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: selectIsAuthenticated(state),
    };
};

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return isAuthenticated ? (
            <Switch>
                <Route component = { Feed } path = { book.feed } />
                <Route component = { Profile } path = { book.profile } />
                <Route component = { NewPassword } path = { book.newPassword } />
                <Redirect to = { book.feed } />
            </Switch>
        ): (
            <Switch>
                <Route component = { Login } path = { book.login } />
                <Route component = { Signup } path = { book.signUp } />
                <Route component = { Feed } path = { book.feed } />
                <Route component = { Profile } path = { book.profile } />
                <Route component = { NewPassword } path = { book.newPassword } />
                <Redirect to = { book.login } />
            </Switch>
        );
    }
}
