// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './counter.scss';

// == Composant
const Counter = ({ count }) => {
  let message = '';
  switch (count) {
    case 0:
      message = 'Aucune recette en cours';
      break;
    case 1:
      message = 'Une recette en cours';
      break;
    default:
      message = `${count} recette en cours`;
  }
  return (
    <div id="todo-counter">
      <p id="task-counter"> {message} </p>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};
// == Export
export default Counter;
