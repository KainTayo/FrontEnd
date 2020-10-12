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
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={12} >
				<Grid container justify='center' align-item="center" spacing={4}>
					{props.kainTayo.restaurantOne.menu.map(food => {
						return (
							<Grid item  xl={4} key={Math.random() * 100}>
								<MenuCard key={food.foodname} food={food} />
							</Grid>
						)
					})}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Restaurant;
