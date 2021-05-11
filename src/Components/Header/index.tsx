import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <ul>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  );
}

export default Header;
