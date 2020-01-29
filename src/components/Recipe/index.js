// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Header from 'src/components/Recipe/Header';
import Ingredients from 'src/components/Recipe/Ingredients';
import Instructions from 'src/components/Recipe/Instructions';
import './recipe.scss';

// == Composant
const Recipe = ({ recipe }) => (
  <div>
    <Header
      name={recipe.name}
      image={recipe.imageURL}
    />
    <Ingredients ingredients={recipe.ingredients} />
    <Instructions instructions={recipe.steps} />
  </div>
);

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,

  }).isRequired,
};

// == Export
export default Recipe;
