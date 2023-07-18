import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

const { userId } = useParams();
const { loading, data } = useQuery( QUERY_USER, {variables: { userId: userId }
});

const profile = data?.profile || {};
console.log(profile);


if (loading) {
  return <div>Loading...</div>;
}
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>        
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
         Browse the book collection
        </p>
        <div>
          {Auth.loggedIn() ? (
            <div className= "mainbook">
            <h2 className="card-header">
        {profile.username} print here user name
      </h2>
      
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button></div>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
