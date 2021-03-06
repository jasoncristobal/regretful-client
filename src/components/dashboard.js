import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getMostRecent } from '../actions/index';

import NavBar from './nav-bar';
import Header from './header';
import List from './list';

import './header.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(getMostRecent())
    }
    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }
        return (
            <section>
                <Header />
                <NavBar />
                <List />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Dashboard);