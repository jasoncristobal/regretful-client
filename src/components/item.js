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
        <div className="items col-4">
            <Link to={'/read/' + props.mistake.id }><button className="item-button">
                {props.mistake.title} {comCount}
            </button></Link>
        </div>
    );
};

