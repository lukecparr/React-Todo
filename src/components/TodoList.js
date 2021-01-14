import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'
import './TodoList.css'

class TodoList extends React.Component {
	render() {
		return(
			<div>
				{this.props.todoItems.map((item) => <Todo item={item} toggleItem={this.props.toggleItem} />)}
				<TodoForm addItem={this.props.addItem}/>
			</div>
		)
	}
};

export default TodoList;