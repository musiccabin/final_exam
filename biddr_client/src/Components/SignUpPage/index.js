import React from 'react';

import { User } from '../../api';

export default function SignUpPage(props) {
  // onSignUp is a function being passed down from <App/>
  // it will update the state of the current user, in other words, change state within <App/>
  const { onSignUp } = props;

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const data = new FormData(currentTarget);
    const userParams = {
        username: data.get('username'),
    //   first_name: data.get('first_name'),
    //   last_name: data.get('last_name'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
    }
    User.create(userParams).then(res => {
      console.log(res);
      onSignUp();
    })
  }

  return(
    <main className='page'>
      <h1>User Sign Up Page</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username'/>
    </div>
        {/* <div>
          <label htmlFor='first_name'>First Name</label>
          <input type='text' name='first_name'/>
        </div>
        <div>
          <label htmlFor='last_name'>Last Name</label>
          <input type='text' name='last_name'/>
        </div> */}
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email'/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password'/>
        </div>
        <div>
          <label htmlFor='password_confirmation'>password_confirmation</label>
          <input type='password' name='password_confirmation'/>
        </div>
        <input type='submit' value='Sign Up!'/>
      </form>
    </main>
  )
}