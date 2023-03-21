import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li style={{ padding: '0 10px' }}>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        Home
                    </Link>
                </li>
                <li style={{ padding: '0 10px' }}>
                    <Link style={{ textDecoration: 'none' }} to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
