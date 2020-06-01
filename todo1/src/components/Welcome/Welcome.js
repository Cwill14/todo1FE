import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="App">
            <h1>Welcome</h1>
            <Link to="/main">
                <button>To Do List</button>
            </Link>
        </div>
    );
};

export default Welcome;