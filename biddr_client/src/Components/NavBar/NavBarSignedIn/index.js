import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Session } from '../../../api';

export default class navBarSignedIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.user
        }
    }

    SignOut = () => {
        console.log('props is', this.props)
        console.log('history is', this.props.history)
        Session.destroy().then(() => this.setState({currentUser: null}));
    }

    render() {
        if (!this.state.currentUser) {
            return <Redirect to='/'/>;
        }
        return (
            <div>
                <p>Hello, {this.props.user.username}</p>
                <Link to="/">HomePage</Link>
                |
                <Link to="/auctions" user={this.props.user}>Auctions</Link>
                |
                <Link to='/auctions/new' user={this.props.user}>New Auction</Link>
                |
                <button onClick={this.SignOut}>Sign Out</button>
            </div>
        )
    }
}