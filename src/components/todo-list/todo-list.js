import React from 'react';

export function TodoList() {
	const items = ['Learn React', 'Build Awesome App'];

	return (
		<ul>
			<li>{items[0]}</li>
			<li>{items[1]}</li>
		</ul>
	);
}