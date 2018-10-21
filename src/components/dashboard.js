import React from 'react';

import TopNavBar from './top-nav-bar';
import Header from './header';
import List from './list';

import './dashboard.css';

export default function Dashboard() {
    return (
        <div className="board">
        <TopNavBar />
        <Header />
        <List />
        </div>
    );
}

