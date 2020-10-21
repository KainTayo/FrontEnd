import React, { useState } from 'react';
import Header from './Header';
import Products from './Products';
import Footer from './Footer'
import TsaaNa from '../Components/Restaurants/TsaaNa'
import CasaDapitan from '../Components/Restaurants/CasaDapitan'
import KainanNiRemy from '../Components/Restaurants/KainanNiRemy'
import GgoChicken from '../Components/Restaurants/GgoChicken'
import Paddy from '../Components/Restaurants/Paddy'
import 'fontsource-roboto';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import theme from '../UI/Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import Restaurants from './Restaurants/Restaurants'

function App() {
	const [value, setValue] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
				<Switch>
					<Route exact path='/'>
					<Home value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
					</Route>
					<Route path='/restaurants'><Restaurants value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/></Route>			
					<Route path='/products' component={Products} />
					<Route path='/casadapitan' component={CasaDapitan} />
					<Route path='/ggochicken' component={GgoChicken} />
					<Route path='/remy' component={KainanNiRemy} />
					<Route path='/paddy' component={Paddy} />
					<Route path='/tsaa' component={TsaaNa} />
				</Switch>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
