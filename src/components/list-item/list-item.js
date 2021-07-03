import React from 'react';
import './list-item.css';

export function TodoListItem({ label, isDone, isImportant, onDelete, onMarkImportant, onTodoDone }) {
	let classNames = `todo-list-item d-flex justify-content-between ${isDone ? 'done' : ''} ${isImportant ? 'important' : ''}`;

	return (
		<span className={classNames}>
			<span className="todo-list-item-label" onClick={onTodoDone}>
				{label}
			</span>
			<span>
				<button type="button"
						onClick={onMarkImportant}
						className="btn btn-outline-success btn-sm">
					✓
				</button>

				<button type="button"
						onClick={onDelete}
						className="btn btn-outline-danger btn-sm">
					🗑
				</button>
			</span>
		</span>
	);
}
