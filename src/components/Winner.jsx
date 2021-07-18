import React from 'react';
import actions from '../_context/actions';
import { useDispatchContext } from '../_context/context';

const Winner = ({ players, selected }) => {
	const dispatch = useDispatchContext();
	const handleResetGame = () => {
		dispatch({
			type: actions.START_OVER,
		});
	};

	const { name, score } = players[selected];
	return (
		<div>
			{selected === null ? (
				'No one won this game!'
			) : (
				<div className="game__winner">
					Winner is {name} with score {score}
				</div>
			)}
			<div className="game__actions">
				<button onClick={handleResetGame}>Start over</button>
			</div>
		</div>
	);
};

export default Winner;
