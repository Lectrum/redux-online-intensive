// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import { Loading } from '../components';
// Pages
import { withRouter } from 'react-router-dom';
import { authActions } from '../bus/auth/actions';
import { socketActions } from '../bus/socket/actions';
import { selectIsAuthenticated, selectIsInitialized } from '../bus/auth/selectors';

import Private from './Private';
import Public from './Public';
import { joinSocketChannel, socket } from '../bus/init/socket';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: selectIsAuthenticated(state),
        isInitialized:   selectIsInitialized(state),
    };
};

const mapDispatchToProps = {
    initializeAsync: authActions.initializeAsync,
    ...socketActions,
};

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    componentDidMount () {
        const { initializeAsync, listenConnection } = this.props;

        initializeAsync();
        listenConnection();
        joinSocketChannel();
    }

    componentWillUnmount () {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    render () {
        const { isAuthenticated, isInitialized, listenPosts } = this.props;

        if (!isInitialized) {
            return <Loading />;
        }

        return isAuthenticated ? <Private listenPosts = { listenPosts } /> : <Public />;
    }
}
