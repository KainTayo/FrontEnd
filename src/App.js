import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Restaurant from './Components/Restaurant';
import 'fontsource-roboto';

import axios from 'axios';

const emptyObject = {
	name: '',
	about: '',
	contact: {
		phone: '',
		email: '',
		address: {
			street: '',
			city: '',
			state: '',
			zip: ''
		}
	},
	restaurantOne: {
		about: '',
		theme: {},
		restaurantName: '',
		logo: '',
		menu: []
	}
};

function App() {
	const [kainTayo, setKainTayo] = useState(emptyObject);

	useEffect(() => {
		axios
			.get('/kainTayoData.json')
			.then(res => setKainTayo(res.data))
			.catch(err => console.log(err));
	}, []);
	return (
		<>
			<Header />
			<Restaurant kainTayo={kainTayo} />
			<Footer />
		</>
	);
}

export default App;
