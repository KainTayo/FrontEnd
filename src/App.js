import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Restaurant from './Components/Restaurant';
import 'fontsource-roboto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path='/restaurant'>
						<Restaurant />
					</Route>
					<Route exact path='/' component={Home} />
				</Switch>
			</Router>

			<Footer />
		</>
	);
}

export default App;
