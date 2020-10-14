// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Signup, Feed, Profile, NewPassword } from '../pages';

// Pages
import { book } from './book';

export default class Public extends Component {
    render () {
        return (
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
