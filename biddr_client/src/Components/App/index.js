import React, { Component } from 'react';
import AuctionShowPage from '../AuctionShowPage'
import AuctionIndexPage from '../AuctionIndexPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import NavBar from '../NavBar';
import SignInPage from '../SignInPage';
import { User } from '../../api';
import AuthRoute from '../AuthRoute';
import SignUpPage from '../SignUpPage';
import NewAuctionForm from '../NewAuctionForm';

// In React application, we create a component that acts as the
// "root" or the entry point to all of our other components.
// This is the one that should be rendered `ReactDOM.render()`
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    }
    this.getCurrentUser = this.getCurrentUser.bind(this)
  }

  getCurrentUser() {
    User.current().then((user) => {
      if(user) {
        this.setState({
          currentUser: user,
        })
      }
      // } else {
      //   if (window.location.pathname === '/sign_in') {
      //     return
      //   } else {
      //     console.log('No Session');
      //     window.location = '/sign_in'
      //   }
      // }
    })
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar isSignedIn={this.state.currentUser} afterSignIn={this.getCurrentUser} component={NavBar}/>
          <Switch>
            <Route exact path='/' component={WelcomePage}/>
            <Route path='/sign_in' component={SignInPage}/>
            <Route 
              path='/sign_up' 
              render={(routeProps) => 
                <SignUpPage 
                  onSignUp={this.getCurrentUser} 
                  {...routeProps}/>
              }/>
            <AuthRoute exact path='/auctions/new' isAllowed={this.state.currentUser} component={NewAuctionForm}/>
            <Route
              path='/auctions/:id' 
              component={AuctionShowPage} user={this.state.currentUser} />
            <Route exact path='/auctions' component={AuctionIndexPage} user={this.state.currentUser} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}