import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavBarSignedIn from './NavBarSignedIn';
import NavBarNotSignedIn from './NavBarNotSignedIn'
// import { User } from '../../api';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isSignedIn = this.props.isSignedIn;
        let navBar;

        if (isSignedIn) {
            navBar = <NavBarSignedIn user={isSignedIn}/>
        } else {
            navBar = <NavBarNotSignedIn/>
        }
        return (
            <div>{navBar}</div>
        )}
}