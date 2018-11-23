import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './header.css';

export function Header(props) {
    return (
        <div className="banner banner-row">
            <Link to="/">REGRETFUL</Link>
        </div>
    );
};

export default connect()(Header)