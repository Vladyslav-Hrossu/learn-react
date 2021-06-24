import {AppHeader} from '../app-header/app-header';
import {SearchPanel} from '../search-panel/search-panel';
import {TodoList} from '../todo-list/todo-list';
import React from 'react';

export function App() {
	return (
		<div>
			<AppHeader/>
			<SearchPanel/>
			<TodoList items={['item1', 'item2']}/>
		</div>
	);
}
