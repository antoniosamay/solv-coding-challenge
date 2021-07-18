import React from 'react';

const styles = {
	border: '1px solid #c3c3c3',
	padding: '12px 24px',
};
const Players = ({ data, selected }) => {
	const { name, score } = data[selected];
	return (
		<div style={styles}>
			Current player: {name} (score - {score})
		</div>
	);
};

export default Players;
