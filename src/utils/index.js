/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

// une fonction pour récuperer un slug d'après une chaine de caractère
export const getSlugFromString = string => (
  slugify(string, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  })
);

// une fonction pour récuperer une url d'après un prefix et une chaine de caractère à slugifier
export const getUrl = (urlPrefix, stringToSlugify) => (
  `${urlPrefix}${getSlugFromString(stringToSlugify)}`
);

// une fonction qui récupère une recette parmis un tableau de recettes donné
// d'après le slug
export const getRecipeBySlug = (recipes, slug) => {
  const selectedRecipe = recipes.find(recipe => getSlugFromString(recipe.name) === slug);
  return selectedRecipe;
};
