import React from 'react';

import './top-nav-bar.css';

export default function TopNavBar() {
    const text  = 'Top navigation';
    return (
        <div className="item">
            {text}
            <button>Logout</button>
        </div>
    );
};

