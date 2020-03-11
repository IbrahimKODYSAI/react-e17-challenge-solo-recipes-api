// Imports NPM
import React from 'react';
import PropTypes from 'prop-types';

// Imports locaux
import './header.scss';

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
