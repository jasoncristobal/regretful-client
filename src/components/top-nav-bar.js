import React from 'react';
import {connect} from 'react-redux';

import {clearAuth} from '../actions/auth'

import './top-nav-bar.css';

export function TopNavBar(props) {
    const text  = 'Top navigation';
    return (
        <div className="item">
            {text}
            <button onClick={event => props.dispatch(clearAuth())}>Logout</button>
        </div>
    );
};

export default connect()(TopNavBar)