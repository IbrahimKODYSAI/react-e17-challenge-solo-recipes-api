// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaStar, FaTrashAlt, FaRegStar } from 'react-icons/fa';


// == Import : local
import './list.scss';

// == Composant
const Task = ({
  label,
  done,
  changeTaskDone,
  id,
  fav,
  changeTaskFav,
  removeTask,
}) => {
  const cssClassNames = classNames('task', {
    'task--done': done,
    'task--fav': fav,
  });

  const Favorite = fav ? FaStar : FaRegStar;

  const changeHandler = (taskId) => {
    return () => (
      changeTaskDone(taskId)
    );
  };
  return (
    <li className={cssClassNames}>
      <input checked={done} onChange={changeHandler(id)} type="checkbox" />
      <span className="task-label">{label}</span>
      <FaTrashAlt className="task-trash" onClick={() => removeTask(id)} />
      <Favorite className="task-fav" onClick={() => changeTaskFav(id)} />
    </li>
  );
};

Task.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  changeTaskDone: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  changeTaskFav: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  fav: PropTypes.bool.isRequired,
};
// == Export
export default Task;
