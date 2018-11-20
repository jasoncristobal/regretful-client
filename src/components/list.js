import React from 'react';
import { connect } from 'react-redux';

import Item from './item';

import './list.css';

export function List(props) {
    console.log(props);
    const items = props.mistakes.map(m => 
        { 
            return (<Item mistake={m} />) 
        })
    return (
        <div className="list row">
            {items}
        </div>
    );
}

const mapStateToProps = state => ({
    mistakes: state.mistake.mistakes
});

export default connect(mapStateToProps)(List)