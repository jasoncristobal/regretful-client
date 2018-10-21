import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginForm from './loginform';

export default function Home(props) {
    return (
        <main>Login and signup forms will be here
            <LoginForm />
            <div>
                <Link to="/dashboard">When you login, you'll go to dashboard</Link>
            </div>            
        </main>
    );
}