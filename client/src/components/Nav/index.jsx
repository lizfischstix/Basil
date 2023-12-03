import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Nav = () => {
  const [isLoggedIn, setLoggedIn] = useState(Auth.loggedIn());

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    setLoggedIn(false);
  };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <Link to="/overview" className="btn btn-info mr-2">
        Overview
      </Link>
      {isLoggedIn ? (
        <>
          <button className="btn btn-danger mr-2" onClick={logout}>
          Logout
          </button>
          <Link to="/signup" className="btn btn-success">
            Sign Up
          </Link>
        </>


      ) : (
        <>
          <Link to="/login" className="btn btn-primary mr-2">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success">
            Sign Up
          </Link>
        </>
      )}
    </header>
  );
};

export default Nav;
