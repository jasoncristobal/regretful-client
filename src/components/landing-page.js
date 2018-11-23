import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <h1>REGRETFUL</h1>
            <p className="intro">
            Everyone makes mistakes. What matters is using them to improve 
            yourself. Regretful allows users to anonymously discuss and learn 
            from each others' bad decisions. 
            </p>
            <section>
                <button className="sign"><Link to="/login">Login</Link></button>
                <button className="sign"><Link to="/register">Sign Up</Link></button>
            </section>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
