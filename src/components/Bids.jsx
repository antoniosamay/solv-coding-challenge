import React from 'react';

const Bids = ({ data, selected }) => {
	const { itemName, image, price } = data[selected];
	return (
		<>
			<div>
				<img src={image} alt={itemName} />
			</div>
			<div>{itemName}</div>
			<div style={{ display: 'none' }}>{price}</div>
		</>
	);
};

export default Bids;
