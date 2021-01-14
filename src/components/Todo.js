import React from 'react';
import './Todo.css'

class Todo extends React.Component {
	
	handleClick = (e) => {
		e.preventDefault();
		this.props.toggleItem(this.props.item.id)
	};
	
	render() {
		return(
			<div className={`item${this.props.item.completed ? ' completed' : ''}`} onClick={this.handleClick}>
				<p>{this.props.item.title}</p>
			</div>
		)
	}
}

export default Todo;