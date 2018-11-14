import React from 'react';
import {Link} from 'react-router-dom';

import {readMistake} from '../actions';
import './item.css';

export default function Item(props) {
    return (
        <div className="item">
            <button>
                <Link to={'/read/' + props.mistake.id }>{props.mistake.title}</Link>
            </button>
        </div>
    );
};

