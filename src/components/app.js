import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard';
import Read from './read';
import Edit from './edit';
import NewItem from './new-item';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1><Link to="/">Regretful</Link></h1>
                </header>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/read" component={Read} />
                    <Route exact path="/edit" component={Edit} />
                    <Route exact path="/new-item" component={NewItem} />
                </main>
            </div>
        </Router>
    );
}