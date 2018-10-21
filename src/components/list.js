import React from 'react';

import Item from './item';

import './list.css';

export default function List() {
    return (
        <div className="list">
            <h3>List</h3>
            <Item />
            <Item />
            <Item />
        </div>
    );
}
