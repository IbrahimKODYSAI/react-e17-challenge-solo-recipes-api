// Imports NPM
import React from 'react';
import PropTypes from 'prop-types';

// Imports locaux

// Composants
const Ingredient = ({ quantity, name }) => (
  <li className="ingredients-ingredient">
    <strong>{quantity}</strong> {name}
  </li>
);

// validation des props
Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

// Export
export default Ingredient;
