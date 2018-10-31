import React from 'react';
import {Link} from 'react-router-dom';

import {readMistake} from '../actions';
import './item.css';

export default function Item() {
    const text  = 'Item';
    return (
        <div className="item">
            <button onClick={ (e)=> this.dispatch(readMistake()) }>
                <Link to="/read">{text}</Link>
            </button>
        </div>
    );
};

