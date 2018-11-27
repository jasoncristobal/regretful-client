import React from 'react';
import { connect } from 'react-redux';

import Item from './item';

import './list.css';

export function List(props) {
    const items = props.mistakes.map( (m, index) => 
        { 
            return (<Item key={index} mistake={m} />) 
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