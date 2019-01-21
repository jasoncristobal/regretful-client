import React from 'react';
import { Link } from 'react-router-dom';

import './item.css';

export default function Item(props) {
    // This determines the number of comments
    let commentCount
    if (props.mistake.comments.length === 1) {
        commentCount = `(1 Comment)`
    } else if (props.mistake.comments.length > 1) {
        commentCount = `(${props.mistake.comments.length} Comments)`
    } else {
        commentCount = null
    } return (
        <div className="items col-4">
            <Link to={'/read/' + props.mistake.id}>
                <button className="item-button">
                    <div className="mistake-title">{props.mistake.title}</div>
                    <span className="comment-line">{commentCount}</span>
                </button>
            </Link>
        </div>
    );
};

