import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getMyMistakes, getMostDiscussed, getMostRecent} from '../actions';
import './header.css';

export function Header() {
    const text  = 'Header';
    return (
        <header className="item">
            {text}
            <button onClick={ (e)=> this.dispatch(getMyMistakes()) }>My Mistakes</button>
            <button onClick={ (e)=> this.dispatch(getMostDiscussed()) }>Most Discussed</button>
            <button onClick={ (e)=> this.dispatch(getMostRecent()) }>Most Recent</button>
            <div><Link to="/new-item"><button>Add New Mistake</button></Link></div>
        </header>
    );
};

export default connect()(Header)