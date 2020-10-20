import React from 'react';
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

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />				
					<Route path='/products' component={Products} />
					<Route path='/casadapitan' component={CasaDapitan} />
					<Route path='/ggochicken' component={GgoChicken} />
					<Route path='/kaninanniremy' component={KainanNiRemy} />
					<Route path='/paddy' component={Paddy} />
					<Route path='/tsaa' component={TsaaNa} />
				</Switch>
				<Footer/>
			</Router>
		</ThemeProvider>
	);
}

export default App;
