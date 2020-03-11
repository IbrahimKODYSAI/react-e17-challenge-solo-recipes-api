// == Initial State

const initialState = {
  recipes: [],
  loading: true,
};

// == Types
export const FETCH_RECIPES = 'FETCH_RECIPES';
const RECEIVE_RECIPES = 'RECEIVE_RECIPES';

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
        loading: false,
      };

    default:
      return state;
  }
};

// == Action Creators
export const fetchRecipes = () => ({
  type: FETCH_RECIPES,
});

export const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes,
});


// == Selectors


// == Export
export default reducer;
