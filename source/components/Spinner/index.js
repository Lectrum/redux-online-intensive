// Core
import React, { Component } from 'react';
import { connect } from "react-redux";

// Instruments
import Styles from './styles.m.css';

const mapStateToProps = (state) => {
    return {
        isFetching: state.ui.get('isFetching'),
    };
};

@connect(mapStateToProps)
export default class Spinner extends Component {
    // static defaultProps = {
    //     isFetching: false,
    // };
    render () {
        const { isFetching } = this.props;

        return isFetching ? <div className = { Styles.spinner } /> : null;
    }
}
