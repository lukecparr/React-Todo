import React from 'react';
import './TodoForm.css'

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			newTodo: ''
		}
	};
		
	handleChange = (e) => {
		this.setState({
			newTodo: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.newTodo);
		this.setState({newTodo: ''})
	}
	
	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input name="title" onChange={this.handleChange} value={this.state.newTodo} type="text" placeholder="Type to add a todo"/>
					<button onClick="">Add Todo</button>
				</form>
				<button onClick={this.props.clearItems}>Clear Completed</button>
			</div>
		)
	}
};

export default TodoForm;