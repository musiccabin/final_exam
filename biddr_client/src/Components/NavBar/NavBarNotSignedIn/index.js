import React from 'react';
import {Link} from 'react-router-dom';

export default function navBarNotSignedIn() {
    
    return (
        <div>
            <Link to="/">HomePage</Link>
            |
            <Link to="/auctions">Auctions</Link>
            |
            <Link to="/sign_up">Sign Up</Link>
            |
            <Link to="/sign_in">Sign In</Link>
        </div>
    )
}