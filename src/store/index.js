// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer, { fetchRecipes } from 'src/store/reducer';
import ajaxMiddleware from './ajaxMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const enhancers = composeEnhancers(
  applyMiddleware(ajaxMiddleware),
);

const store = createStore(
  reducer,
  enhancers,
);

store.dispatch(fetchRecipes());

// == Export
export default store;
