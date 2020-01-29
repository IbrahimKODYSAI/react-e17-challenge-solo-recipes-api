// import NPM
import React from 'react';
import PropTypes from 'prop-types';

// imports locaux
import Ingredient from 'src/components/Recipe/Ingredients/ingredient';
import './ingredients.scss';

// composant
const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {/* on pourrait destructurer directement comme ça
      ingredients.map(({ name, quantity }) => { */}
    {ingredients.map((ingredient) => {
      const { name } = ingredient;
      return <Ingredient key={name} {...ingredient} />;
    }) }
  </ul>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// on exporte le composant
export default Ingredients;
