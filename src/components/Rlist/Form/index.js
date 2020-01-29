// == Import : npm
import React from 'react';

// == Import : local
import './form.scss';
import PropTypes from 'prop-types';

// == Composant
const Form = ({ addTask, inputValue, changeInputValue }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    addTask();
  };

  const changeHandler = (event) => {
    changeInputValue(event.target.value);
  };
  return (
    <form onSubmit={submitHandler} id="todo-form">
      <input
        value={inputValue}
        onChange={changeHandler}
        name="newTask"
        type="text"
        id="todo-input"
        placeholder="Ajouter une recette à faire"
      />
    </form>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
};
// == Export
export default Form;
