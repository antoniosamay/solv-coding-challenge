const getPlayerWithClosestBidIdx = (bids, bidItemPrice) => {
	let minIdx = null,
		minBid = Infinity;
	for (var i = 0; i < bids.length; i++) {
		const bidDiff =
			bids[i] > bidItemPrice ? Infinity : bidItemPrice - bids[i];
		if (bidDiff < minBid) {
			minIdx = i;
			minBid = bidDiff;
		}
	}
	return minIdx;
};

let getWinnerIdx = (players) => {
	let maxIdx = null,
		maxScore = 0;
	for (var i = 0; i < players.length; i++) {
		const { score } = players[i];
		if (score > maxScore) {
			maxIdx = i;
			maxScore = score;
		}
	}
	return maxIdx;
};

function isNumeric(str) {
	if (typeof str != 'string') return false; // we only process strings!
	return (
		!isNaN(str) && !isNaN(parseFloat(str)) // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
	); // ...and ensure strings of whitespace fail
}

export { getPlayerWithClosestBidIdx, getWinnerIdx, isNumeric };
