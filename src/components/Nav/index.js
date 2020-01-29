import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import locaux
import { getUrl } from 'src/utils';
import './nav.scss';
// li.menu-item*9>a.menu-item-link>lorem7

const Nav = ({ recipes }) => (
  <ul className="menu">
    <li className="menu-item">
      <NavLink
        to="/"
        exact
        activeClassName="menu-item-link--active"
        className="menu-item-link"
      >
        Accueil
      </NavLink>
      <NavLink
        to="/login"
        exact
        activeClassName="menu-item-link--active"
        className="menu-item-link"
      >
        Login
      </NavLink>
      <NavLink
        to="/list"
        exact
        activeClassName="menu-item-link--active"
        className="menu-item-link"
      >
        My Coocking List
      </NavLink>
    </li>
    {recipes.map(({ name }) => (
      <li key={name} className="menu-item">
        <NavLink
          // to={`/recipe/${getSlugFromString(name)}`}
          to={getUrl('/recipe/', name)}
          exact
          activeClassName="menu-item-link--active"
          className="menu-item-link"
        >
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
);

Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Nav;
