import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './landing-page.css';

export function LandingPage(props) {
    // If we are logged in, redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <h1>REGRETFUL</h1>
            <section>
                <button className="sign"><Link to="/login">Login</Link></button>
                <button className="sign"><Link to="/register">Sign Up</Link></button>
            </section>
            <section className="landing-row">
                <div className="col-3">
                    <img className="landing-image" alt="mobile screen 1 of 4" src={"https://raw.githubusercontent.com/jasoncristobal/regretful-client/master/public/landing-1.png"} />
                    <p className="mobile-blurb">Everybody makes mistakes. What matters is learning from them.</p>
                </div>
                <div className="col-3">
                    <img className="landing-image" alt="mobile screen 2 of 4" src={"https://raw.githubusercontent.com/jasoncristobal/regretful-client/master/public/landing-2.png"} />
                    <p className="mobile-blurb">Discover what others have learned from their bad choices</p>
                </div>
                <div className="col-3">
                    <img className="landing-image" alt="mobile screen 3 of 4" src={"https://raw.githubusercontent.com/jasoncristobal/regretful-client/master/public/landing-3.png"} />
                    <p className="mobile-blurb">Secretly reveal your own regrets and what they taught you</p>
                </div>
                <div className="col-3">
                    <img className="landing-image" alt="mobile screen 4 of 4" src={"https://raw.githubusercontent.com/jasoncristobal/regretful-client/master/public/landing-4.png"} />
                    <p className="mobile-blurb">Anonymously discuss experiences; offer advice and encouragement.</p>
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
