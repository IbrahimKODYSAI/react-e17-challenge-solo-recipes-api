// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import Home from 'src/components/Home';
// je charge mes containers
import Recipe from 'src/containers/Recipe';
import Nav from 'src/containers/Nav';
import Error from 'src/components/Error';
import Rlist from 'src/components/Rlist'
import './app.scss';

// == Composant
const App = ({ loading }) => (
  <div id="app">
    {loading && (
      <div id="loading">Veuillez patienter</div>
    ) }
    {!loading && (
      <>
        <nav className="nav">
          <Nav />
        </nav>
        <main className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/recipe/:slug"
              component={Recipe}
            />
            <Route path="/list" exact component={Rlist} />
            <Route component={Error} />
          </Switch>
        </main>
      </>
    )}
  </div>
);

App.propTypes = {
  loading: PropTypes.bool.isRequired,
};


// == Export
export default App;
