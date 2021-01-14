import React from 'react';
import TodoList from './components/TodoList'
import './App.css'

const todoData = [
  {
    title: 'Put components in place',
    id: 6842135498,
    completed: false
  },
  {
    title: 'Render elements on screen',
    id: 1598746513,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
  }

  addItem = (itemName) => {
		this.setState({
      todos: [...this.state.todos, {
        title: itemName,
        id: Date.now(),
        completed: false
      }]
    })
  };

  toggleItem = (itemId) => {
    this.setState({
      todos: this.state.todos.map((item => {
        return item.id === itemId ? {...item, completed: !item.completed} : item;
      }))
    })
  }

  clearItems = () => {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return !item.completed;
      })
    })
  }

  render() {
    return (
      <div className="app-container">
        <h2>Welcome to Luke's Todo App!</h2>
        <TodoList
          todoItems={this.state.todos}
          addItem={this.addItem}
          toggleItem={this.toggleItem}
          clearItems={this.clearItems}
        />
      </div>
    );
  }
}

export default App;
