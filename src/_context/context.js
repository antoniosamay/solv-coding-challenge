import React, { useReducer } from 'react';
import { reducer, initialState } from './reducer';

const StateContext = React.createContext(null);
const DispatchContext = React.createContext(null);

const Provider = ({ children, data }) => {
	const [state, dispatch] = useReducer(reducer, {
		...initialState,
		bidItems: [...data],
	});
	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

const useStateContext = () => {
	const context = React.useContext(StateContext);
	if (context === undefined) {
		throw new Error('useStateContext must be used within a Provider');
	}
	return context;
};

const useDispatchContext = () => {
	const context = React.useContext(DispatchContext);
	if (context === undefined) {
		throw new Error('useDispatchContext must be used within a Provider');
	}
	return context;
};

const useTheContext = () => {
	return [useStateContext(), useDispatchContext()];
};

export { Provider, useStateContext, useDispatchContext, useTheContext };
