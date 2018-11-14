import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getMyMistakes } from '../actions/index';

import TopNavBar from './top-nav-bar';
import Header from './header';
import List from './list';

import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(getMyMistakes())
    }
    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }
        return (
            <div className="board">
                <TopNavBar />
                <Header />
                <List />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Dashboard);