// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import : local
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Nav from 'src/components/Nav';
import Rlist from 'src/components/Rlist';
// import LoginPage from 'src/components/Login';
import { getRecipeBySlug } from 'src/utils';
import Error from 'src/components/Error';
import './app.scss';

import recipes from 'src/data/recipes';

// == Composant
const App = () => (
  <div id="app">
    <nav className="nav">
      <Nav recipes={recipes} />
    </nav>
    <main className="content">
      <Route path="/" exact component={Home} />
      {/* <Route path="/login" exact component={LoginPage} /> */}
      <Route path="/list" exact component={Rlist} />
      <Route
        path="/recipe/:slug"
        render={({ match: { params: { slug } } }) => {
          const recipe = getRecipeBySlug(recipes, slug);
          if (!recipe) {
            return (
              <Route component={Error} />
            );
          } return (
            <Recipe recipe={getRecipeBySlug(recipes, slug)} />
          );
        }}
      />
    </main>
  </div>
);

// == Export
export default App;
