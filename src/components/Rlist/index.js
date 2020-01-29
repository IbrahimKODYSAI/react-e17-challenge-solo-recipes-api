// == Import : npm
import React from 'react';

// == Import : local
import './rlist.scss';
import Form from 'src/components/Rlist/Form';
import Counter from 'src/components/Rlist/Counter';
import List from 'src/components/Rlist/List';
// import defaultTasks from 'src/Data';

// == Composant
class Listme extends React.Component {
  state = {
    tasks: [],
    inputValue: '',
    isConnected: null,
  }

  componentDidMount() {
    sessionStorage.getItem('username') ? this.setState({ isConnected: true }) : this.setState({ isConnected: false });
  }

  changeInputValue = (newInputValue) => {
    this.setState({
      inputValue: newInputValue,
    });
  };

  addTask = () => {
    const { inputValue: value, tasks } = this.state;
    const allIds = tasks.map(task => task.id);

    const id = allIds.length > 0 ? Math.max(...allIds) + 1 : 1;
    const newTask = {
      id,
      label: value,
      done: false,
      fav: false,
    };
    const { tasks: defaultTask } = this.state;
    const currentTask = [
      ...defaultTask,
      newTask,
    ];
    this.setState({
      tasks: currentTask,
      inputValue: '',
    });
  }

  removeTask = (id) => {
    const { tasks } = this.state;
    const newTasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks,
    });
  }

  changeTaskFav = (id) => {
    const { tasks } = this.state;
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          fav: !task.fav,
        };
      }
      return task;
    });
    this.setState({
      tasks: newTasks,
    });
  }

  changeTaskDone = (id) => {
    const { tasks } = this.state;
    const taskUpdate = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    this.setState({
      tasks: taskUpdate,
    });
  }

  getFilteredTasks = tasks => [
    ...tasks.filter(task => !task.done && task.fav),
    ...tasks.filter(task => !task.done && !task.fav),
    ...tasks.filter(task => task.done),
  ];

  render() {
    const { tasks, inputValue } = this.state;
    const count = tasks.filter(task => !task.done).length;

    const filteredTasks = this.getFilteredTasks(tasks);
    return (
      <div id="body">
        <div id="app">
          {this.state.isConnected
           && <p> {sessionStorage.getItem('username')} </p>
          }
          <Form
            inputValue={inputValue}
            addTask={this.addTask}
            changeInputValue={this.changeInputValue}
          />
          <Counter count={count} />
          <List
            tasks={filteredTasks}
            actions={{
              changeTaskDone: this.changeTaskDone,
              changeTaskFav: this.changeTaskFav,
              removeTask: this.removeTask,
            }}
          />
        </div>
      </div>

    );
  }
}

// == Export
export default Listme;
