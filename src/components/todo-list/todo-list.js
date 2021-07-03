import React from 'react';
import { TodoListItem } from '../list-item/list-item';
import './todo-list.css';

export function TodoList({ todos, onTodoDelete, onTodoDone, onMarkImportant }) {
	const elements = todos.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<li key={id} className="list-group-item">
				<TodoListItem {...itemProps} onDelete={() => onTodoDelete(id)} onTodoDone={() => onTodoDone(id)} onMarkImportant={() => onMarkImportant(id)}/>
			</li>
		);
	});

	return (
		<ul className="list-group todo-list">
			{elements}
		</ul>
	);
}
