/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

// une fonction pour récuperer un slug d'après une chaine de caractère
// cette fonction me permet de spécifier mes options une seule fois
export const getSlugFromString = string => (
  slugify(string, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  })
);

// une fonction pour récuperer une url d'après un prefix et une chaine de caractère à slugifier
// cette fonction fait elle même appel à la première
// c'est pratique de décomposer si on veut executer la première indépendamment
export const getUrl = (urlPrefix, stringToSlugify) => (
  `${urlPrefix}${getSlugFromString(stringToSlugify)}`
);

// une fonction qui récupère une recette parmis un tableau de recettes donné
// d'après le slug
// pour être sûr de slugifier toujours de la même manière on fera appel à notre
// première fonction à l'intérieur
export const getRecipeBySlug = (recipesData, slug) => {
  const selectedRecipe = recipesData.find(recipe => getSlugFromString(recipe.name) === slug);
  return selectedRecipe;
};
