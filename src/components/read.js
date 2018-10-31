import React from 'react';
import {Link} from 'react-router-dom';
import NewComment from './new-comment';

export default function Read(props) {
    return (
        <main>
            <div>Content for this item will be here</div>
            <button><Link to="/dashboard">Back</Link></button>
            <button><Link to="/edit">Edit</Link></button>
            <section>
                <NewComment />
                Comments will be displayed below
            </section>
        </main>
    );
}