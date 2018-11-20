import React from 'react';
import {Link} from 'react-router-dom';

import './item.css';

export default function Item(props) {
    let comCount
    if (props.mistake.comments.length === 1) {
        comCount = `(1 Comment)`
    } else if (props.mistake.comments.length > 1) {
        comCount = `(${props.mistake.comments.length} Comments)`
    } else {
        comCount = null
    }return (
        <div className="item col-4">
            <button className="item-button">
                <Link to={'/read/' + props.mistake.id }>{props.mistake.title} {comCount}</Link>
            </button>
        </div>
    );
};

