// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import { Loading } from '../components';
// Pages
import { withRouter } from 'react-router-dom';
import { authActions } from '../bus/auth/actions';
import { selectIsAuthenticated, selectIsInitialized } from '../bus/auth/selectors';

import Private from './Private';
import Public from './Public';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: selectIsAuthenticated(state),
        isInitialized:   selectIsInitialized(state),
    };
};

const mapDispatchToProps = {
    initializeAsync: authActions.initializeAsync,
};

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    componentDidMount () {
        this.props.initializeAsync();
    }

    render () {
        const { isAuthenticated, isInitialized } = this.props;

        if (!isInitialized) {
            return <Loading />;
        }

        return isAuthenticated ? <Private /> : <Public />;
    }
}
