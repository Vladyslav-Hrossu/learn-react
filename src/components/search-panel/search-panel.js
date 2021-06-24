import React from 'react';

export function SearchPanel() {
	const searchText = 'Type here to search';
	const searchStyles = {
		fontSize: '25px'
	};

	return <input style={searchStyles}
				  type="text"
				  placeholder={searchText}/>;
}
