import React ,{ useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuCard from './MenuCard';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		paddingBottom:25,
		marginBottom:5
	}
}));
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

function Restaurant(props) {
	const [kainTayo, setKainTayo] = useState(emptyObject);

	useEffect(() => {
		axios
			.get('/kainTayoData.json')
			.then(res => setKainTayo(res.data))
			.catch(err => console.log(err));
	},[]);

	const classes = useStyles();
	return (
		<Grid   
		container
		direction="row"
		justify="center"
		alignItems="center" 
		className={classes.root}	
		 >
			{kainTayo.restaurantOne.menu.map(food => {
				return (
					<Grid className="menu-card" item xl={4} lg={4} align="center" key={Math.random() * 100}>
						<MenuCard  key={food.foodname} food={food} />
					</Grid>
				);
			})}
		</Grid>
	);
}

export default Restaurant;
