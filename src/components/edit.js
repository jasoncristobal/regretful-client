import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function Edit(props) {
    return (
        <main>
            <section>
                <div>
                    <textarea>Content for this item will be here</textarea>
                </div>
                <button><Link to="/dashboard">Cancel</Link></button>
                <button>Save</button>
            </section>
        </main>
    );
}