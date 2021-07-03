import React from 'react';
import './item-add-form.css';

export function ItemAddForm({ addItemFn }) {
	return (
		<div className="item-add-form">
			<button className="btn btn-outline-secondary" onClick={() => addItemFn('test')}>Add item</button>
		</div>
	);
}
