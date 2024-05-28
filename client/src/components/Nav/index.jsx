import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { LOGOUT } from '../../utils/actions'; // Assuming you have defined this action
import { logoutUser } from '../../utils/authActions'; // Assuming you have an action creator

function Nav() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.loggedIn); // Update according to your auth state structure

  function handleLogout() {
    Auth.logout();
    dispatch(logoutUser());
  }

  function showNavigation() {
    if (isLoggedIn) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
          -Shop-Shop
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
