// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './list.scss';
import Task from './Task';
// == Composant
const List = ({ tasks, actions }) => (
  <div id="todo-task">
    <ul id="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          {...task}
          {...actions}
        />
      ))}
    </ul>
  </div>

);

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  actions: PropTypes.object.isRequired,
};

// == Export
export default List;
