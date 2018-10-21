import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './header.css';

export default function Header() {
    const text  = 'Header';
    return (
        <header className="item">
            {text}
            <button>My Mistakes</button>
            <button>Most Discussed</button>
            <button>Most Recent</button>
            <div><Link to="/new-item"><button>Add New Mistake</button></Link></div>
        </header>
    );
};

