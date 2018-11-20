import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getMyMistakes, getMostRecent} from '../actions';
import './header.css';

export function Header(props) {
    const text  = 'Header';
    return (
        <header className="item row">
            {text}
            <button onClick={ (e)=> props.dispatch(getMyMistakes()) } type='button'>My Mistakes</button>
            <button onClick={ (e)=> props.dispatch(getMostRecent()) } type='button'>Latest Mistakes</button>
            <div><Link to="/new-item"><button>Add New Mistake</button></Link></div>
        </header>
    );
};

export default connect()(Header)