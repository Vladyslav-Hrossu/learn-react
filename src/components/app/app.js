import { AppHeader } from '../app-header/app-header';
import { SearchPanel } from '../search-panel/search-panel';
import { TodoList } from '../todo-list/todo-list';
import React, { useState } from 'react';
import { ItemStatusFilter } from '../item-status-filter/item-status-filter';
import { ItemAddForm } from '../item-add-form/item-add-form';
import './app.css';

export function App() {
	const initialTodoData = [
		{ label: 'Drink coffee', isImportant: false, id: 1, isDone: false },
		{ label: 'Make awesome app', isImportant: true, id: 2, isDone: false },
		{ label: 'Have a lunch', isImportant: false, id: 3, isDone: false }
	];
	const [ todoData, updateTodoData ] = useState(initialTodoData);
	const onTodoDelete = (deletedItemId) => updateTodoData((todoData) => todoData.filter(({ id }) => deletedItemId !== id));
	const onTodoAdd = (label) => updateTodoData((todoData) => [ ...todoData, {
		label,
		important: false,
		id: Math.random()
	} ]);

	const onMarkImportant = (todoId) => updateTodoData((todoData) => todoData.map((item) => ({
		...item,
		isImportant: item.id === todoId ? !item.isImportant : item.isImportant
	})));

	const onTodoDone = (todoId) => updateTodoData((todoData) => todoData.map((item) => ({
		...item,
		isDone: item.id === todoId ? !item.isDone : item.isDone
	})));

	return (
		<div className="todo-app">
			<AppHeader toDo={1} done={3}/>
			<div className="top-panel d-flex">
				<SearchPanel/>
				<ItemStatusFilter/>
			</div>

			<TodoList todos={todoData}
					  onTodoDelete={onTodoDelete}
					  onMarkImportant={onMarkImportant}
					  onTodoDone={onTodoDone}/>
			<ItemAddForm addItemFn={onTodoAdd}/>
		</div>
	);
}
