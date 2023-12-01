import React from 'react';
import {  Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="display-inline justify-center " >
      <li>
        <Link to="/">Overview</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/category">Spending by Category</Link>
      </li>
      <li>
        <Link to="/date">Spending by Date</Link>
      </li>
  </div>
  );
};

export default Nav;


