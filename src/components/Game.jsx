import React from 'react';
import isGameEnded from '../_context/reducer';
import Players from './Players';
import Bids from './Bids';
import Form from './Form';
import Winner from './Winner';
import { useStateContext } from '../_context/context';

const Game = () => {
	const {
		activePlayerIdx,
		players,
		bidItems,
		activeItemIdx,
		isGameEnded,
		winnerPlayerIdx,
	} = useStateContext();
	return (
		<div className="game">
			{isGameEnded ? (
				<Winner players={players} selected={winnerPlayerIdx} />
			) : (
				<>
					<div className="game__players">
						<Players data={players} selected={activePlayerIdx} />
					</div>
					<div>
						<>
							<div className="game__bids">
								<Bids
									data={bidItems}
									selected={activeItemIdx}
								/>
							</div>
							<div className="game__form">
								<Form />
							</div>
						</>
					</div>
				</>
			)}
		</div>
	);
};

export default Game;
