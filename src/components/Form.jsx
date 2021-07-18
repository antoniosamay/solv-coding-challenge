import React, { useState } from 'react';
import { useDispatchContext } from '../_context/context';
import actions from './../_context/actions';
import { isNumeric } from '../_context/utilities';

const Form = () => {
	const [bid, setBid] = useState('');
	const dispatch = useDispatchContext();

	const handleSubmit = (event) => {
		event.preventDefault();

		// todo: have errors array in state and do validation part of action
		if (!isNumeric(bid) || !bid) {
			alert('Enter valid price');
		} else {
			dispatch({
				type: actions.SET_PLAYER_BID,
				data: bid,
			});
			setBid('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={(e) => setBid(e.target.value)}
				placeholder="Bid in $$"
				value={bid}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Form;
