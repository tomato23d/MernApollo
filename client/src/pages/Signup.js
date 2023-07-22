import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import '../index.css';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({username: '', email: '', password: '' });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({...formState, [name]: value,});
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username" name="username" type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email" name="email" type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input" 
                  placeholder="******" name="password" type="text"
                  value={formState.password}
                  onChange={handleChange}
                />

                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }} type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className = 'main'>
        <h1 className = 'page-title'> Please contact me</h1>
      
        <form className = "new-form">

                <div className="form-line">
                      <label for="name">Name</label>
                      <input required type = 'text'
                      placeholder="your name"/>
                </div>
       
                <div className="form-line">
                      <label for="email">Email</label>
                      <input required type = 'email'
                      placeholder="email"/>
                </div>
       
                <div className="form-line">
                      <label for="name">Password</label>
                      <input required type = 'text'
                      placeholder="your password"/>
                </div>
                <br></br>
                
        </form>
                <button type="submit" className="form-button" >
                      SUBMIT
                </button>
                </div> */}
    </main>
  );
};

export default Signup;
