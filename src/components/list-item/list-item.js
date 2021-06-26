import React from 'react';
import './list-item.css';

export function TodoListItem({ label, important = false }) {
	const styles = {
		color: important ? 'steelblue' : 'black',
		fontWeight: important ? 'bold' : 'normal'
	};
	return (
		<span className="todo-list-item d-flex justify-content-between">
			<span className="todo-list-item-label" style={styles}>
				{label}
			</span>
			<span>
				<button type="button"
						className="btn btn-outline-success btn-sm">
					<i className="fa fa-exclamation"/>
				</button>

				<button type="button" className="btn btn-outline-danger btn-sm">
					<i className="fa fa-trash"/>
				</button>
			</span>
		</span>
	);
}
