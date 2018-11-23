import React from 'react';
import { clearAuth } from '../actions/auth'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMyMistakes, getMostRecent, getByTitles } from '../actions';

import './nav-bar.css';

export function NavBar(props) {
    return (
        <nav className="nav-row">
            <div className="logout-bar">
                <button className="logout-btn" onClick={event => props.dispatch(clearAuth())}>Logout</button>
            </div>
            <button onClick={(e) => props.dispatch(getMostRecent())} type='button'>Latest Mistakes</button>
            <button onClick={(e) => props.dispatch(getMyMistakes())} type='button'>My Mistakes</button>
            <button onClick={(e) => props.dispatch(getByTitles())} type='button'>Sort By Title</button>
            <div><Link to="/new-item"><button>Add New Mistake</button></Link></div>
        </nav>
    );
};

export default connect()(NavBar)