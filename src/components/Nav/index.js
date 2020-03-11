import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { getUrl } from 'src/utils';
import './nav.scss';

const Nav = ({ recipes }) => (
  // li.menu-item*9>a.menu-item-link>lorem7
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
    </li>
    <li>
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
