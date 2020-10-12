import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuCard from './MenuCard';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	}
}));

function Restaurant(props) {
	const classes = useStyles();
	return (
		<Grid   
		container
		direction="row"
		justify="center"
		alignItems="center" 
		className={classes.root}	
		 >
			{props.kainTayo.restaurantOne.menu.map(food => {
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
