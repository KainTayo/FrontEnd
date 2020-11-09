import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, Grid } from '@material-ui/core';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import paddy from '../../assets/Paddy.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	buttonContainer: {
		marginTop: '1em'
	},
	button: {
		...theme.typography.headline,
		backgroundColor: theme.palette.common.blue,
		color: 'white',
		borderRadius: 50,
		height: 45,
		width: 145,
		marginRight: 40,
		fontSize: '0.7rem',
		'&:hover': {
			backgroundColor: theme.palette.primary.light
		},
		marginTop: 15,
		[theme.breakpoints.down('xs')]: {
			marginTop: 20,
			margin: '0 auto'
		}
	},
	headline: {
		...theme.typography.headline,
		color: theme.palette.common.blue,
		[theme.breakpoints.down('xs')]: {
			margin: '0 auto'
		}
	},
	icon: {
		marginLeft: '2em',
		height: '20em',
		[theme.breakpoints.down('xs')]: {
			marginLeft: 0
		}
	},
	restaurantContainer: {
		marginTop: '4.5em',
		[theme.breakpoints.down('sm')]: {
			padding: 25
		},
		alignItems: 'center'
	}
}));

export default function PaddyHeader(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid item>
				<Grid className={classes.restaurantContainer} container direction='row' justify={props.matchesSM ? 'center' : 'flex-end'}>
					<Grid style={{ marginLeft: props.matchesSM ? 0 : '5em', textAlign: props.matchesSM ? 'center' : undefined }} item>
						<Typography className={classes.headline} variant='h3'>
							Lorem Ipsum is simply dummy text of the printing
						</Typography>

						<Typography variant='subtitle1'>
							Lorem Ipsum is simply dummy text of the printing
							{props.matchesSM ? null : <br />}
							Lorem Ipsum
						</Typography>
						<Button
							component={Link}
							onClick={() => {
								props.setValue(1);
								props.setSelectedIndex(1);
							}}
							to='/paddy'
							variant='outlined'
							className={classes.button}>
							<span style={{ marginRight: 10 }}>MENU</span>
							<RestaurantMenuIcon width={10} height={10} fill={props.theme.palette.common.blue} />
						</Button>
					</Grid>
					<Grid item style={{ marginRight: props.matchesSM ? 0 : '5em' }}>
						<img className={classes.icon} alt='Paddy Custom icon' src={paddy} />
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
