import axios from 'axios';

import { FETCH_RECIPES, receiveRecipes } from 'src/store/reducer';

const ajaxMiddleware = store => next => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      axios.get('https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json')
        .then((response) => {
          const { data: recipesFromGithub } = response;
          store.dispatch(receiveRecipes(recipesFromGithub));
        })
        .catch(() => {
          console.log('Une erreur s\'est produite');
        });
      break;
    default:
      next(action);
  }
};

export default ajaxMiddleware;
