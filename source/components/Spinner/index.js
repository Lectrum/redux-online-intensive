// Core
import React, { Component } from 'react';
import { selectIsFetching } from '../../bus/ui/selectors';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';

const mapStateToProps = (state) => ({
    isFetching: selectIsFetching(state),
});

@connect(mapStateToProps)
export default class Spinner extends Component {
    render () {
        const { isFetching } = this.props;

        return isFetching ? <div className = { Styles.spinner } /> : null;
    }
}
