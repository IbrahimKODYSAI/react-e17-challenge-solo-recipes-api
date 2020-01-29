// Imports NPM
import React from 'react';
import PropTypes from 'prop-types';

// Imports locaux

// Composants
// ici on a isolé nos li dans un composant à part pour plus de modularité
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
