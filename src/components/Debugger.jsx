import React from 'react';
import { useTheContext } from '../_context/context';

const Debugger = () => {
	const [state] = useTheContext();
	return <pre>{JSON.stringify(state, undefined, 2)}</pre>;
};

export default Debugger;
