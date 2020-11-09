import React, { useState } from 'react';
import Header from './Header';
import Products from '../pages/Products';
import Footer from './Footer';
import TsaaNa from '../Components/Restaurants/TsaaNa';
import CasaDapitan from '../Components/Restaurants/CasaDapitan';
import KainanNiRemy from '../Components/Restaurants/KainanNiRemy';
import GgoChicken from '../Components/Restaurants/GgoChicken';
import Paddy from '../Components/Restaurants/Paddy';
import 'fontsource-roboto';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import theme from '../UI/Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Restaurants from './Restaurants/Restaurants';
import ShopProvider from '../context/ShopProvider';

function App() {
	const [value, setValue] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<ShopProvider>
			<ThemeProvider theme={theme}>
				<Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
				<Switch>
					<Route exact path='/'>
						<Home value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
					</Route>
					<Route path='/restaurants'>
						<Restaurants value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
					</Route>
					<Route path='/products' component={Products} />
					<Route path='/casadapitan' component={CasaDapitan} />
					<Route path='/ggochicken' component={GgoChicken} />
					<Route path='/remy' component={KainanNiRemy} />
					<Route path='/paddy' component={Paddy} />
					<Route path='/tsaa' component={TsaaNa} />
				</Switch>
				<Footer />
			</ThemeProvider>
		</ShopProvider>
	);
}

export default App;
