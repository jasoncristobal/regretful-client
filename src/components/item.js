import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './item.css';

export default function Item() {
    const text  = 'Item';
    return (
        <div className="item">
            <Link to="/read">{text}</Link>
        </div>
    );
};

