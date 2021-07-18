import actions from './actions';
import { getPlayerWithClosestBidIdx, getWinnerIdx } from './utilities';
const initialState = {
	bidItems: [],
	activeItemIdx: 0,
	players: [
		{
			score: 0,
			currentBid: Infinity,
			name: 'Antonio',
		},
		{
			score: 0,
			currentBid: Infinity,
			name: 'Owen',
		},
	],
	activePlayerIdx: 0,
	winnerPlayerIdx: null,
	isGameEnded: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case actions.SET_BID_ITEMS: {
			return {
				...state,
				bidItems: [action.data],
			};
		}
		case actions.SET_PLAYER_BID: {
			const isLastPlayer =
				state.activePlayerIdx === state.players.length - 1;
			const isLastBid = state.activeItemIdx === state.bidItems.length - 1;
			const isGameEnded = isLastBid && isLastPlayer;

			const players = state.players.map((player, idx) => {
				return {
					...player,
					currentBid:
						idx === state.activePlayerIdx
							? action.data
							: player.currentBid,
				};
			});

			// Check if this is the last player and calculate the winner for current round.
			if (isLastPlayer) {
				const roundWinnerIdx = getPlayerWithClosestBidIdx(
					players.map(({ currentBid }) => currentBid),
					state.bidItems[state.activeItemIdx].price
				);
				if (roundWinnerIdx !== null) {
					players[roundWinnerIdx]['score'] =
						players[roundWinnerIdx]['score'] + 1;
				}
			}

			return isLastPlayer
				? {
						...state,
						players: players.map((player) => {
							return {
								...player,
								currentBid: Infinity,
							};
						}),
						activePlayerIdx: 0,
						activeItemIdx: state.activeItemIdx + 1,
						isGameEnded,
						winnerPlayerIdx: isGameEnded
							? getWinnerIdx(players)
							: state.winnerPlayerIdx,
				  }
				: {
						...state,
						players,
						activePlayerIdx: state.activePlayerIdx + 1,
				  };
		}
		case actions.START_OVER: {
			return {
				...state,
				players: state.players.map((player) => {
					return {
						...player,
						currentBid: Infinity,
						score: 0,
					};
				}),
				activePlayerIdx: 0,
				activeItemIdx: 0,
				isGameEnded: false,
				winnerPlayerIdx: null,
			};
		}
		default: {
			return state;
		}
	}
};

export { initialState, reducer, reducer as default };

// 	winnerPlayerIdx: isLastPlayer ? getPlayerWinnerIdx() : null,
