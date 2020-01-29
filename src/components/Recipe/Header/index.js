// Imports NPM
import React from 'react';
import PropTypes from 'prop-types';

// Imports locaux
import './header.scss';

// http://images.marmitoncdn.org/recipephotos/multiphoto/dc/dc7a000f-eb4c-42f4-91a6-320545207e72_normal.jpg

// en html ce serait
// style="background-image:url(MonUrl);"

// Composants
const Header = (props) => {
  const {
    name,
    image,
  } = props;
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className="header-title">{name}</h1>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

// Export
export default Header;
