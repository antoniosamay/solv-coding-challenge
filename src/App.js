import './App.css';
import { Provider } from './_context/context';
import data from './bid-items.json';
import Game from './components/Game';

// import * as Styled from './_styles'

function App() {
	return (
		<Provider data={data}>
			<Game />
		</Provider>
	);
}

export default App;
