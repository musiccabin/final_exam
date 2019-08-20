import React, { Component } from 'react';
import { Session } from '../../api';

export default class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;
    // console.log(currentTarget);
    const data = new FormData(currentTarget);
    Session.create({
        // username: data.get('username')
      email: data.get('email'),
      password: data.get('password'),
    }).then(data => {
      if (data.id) {
        this.setState({user: data});
        this.props.history.push('/');
      }
    });
  }

  render() {
    return(
      <main className='page'>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
        {/* <div>
            <label htmlFor='username'>Username</label>
            <input type='username' name='username'></input>
          </div> */}
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email'></input>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password'></input>
          </div>
          <input type='submit' value='Sign In'/>
        </form>
      </main>
    );
  }
}