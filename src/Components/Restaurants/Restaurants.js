import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Typography, useMediaQuery, Button, Grid } from '@material-ui/core';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import dapitan from '../../assets/CasaDapitan.png';
import goChicken from '../../assets/GgoGgoChicken.png';
import kainan from '../../assets/KainanNiRemy.png';
import paddy from '../../assets/Paddy.png';
import tsaa from '../../assets/TsaaNa.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	mainContainer: {
		marginTop: '3.5em',
		marginBottom: '3em',
		[theme.breakpoints.down('md')]: {
			marginTop: '2.5em',
			marginBottom: '2em'
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '2em',
			marginBottom: '1.5em'
		}
	},
	image: {
		height: '100%',
		width: '100%'
	},
	imageContainer: {
		maxWidth: '50em',
		minWidth: '21em',
		marginTop: '2em',
		marginRight: '7%',
		marginLeft: '3%',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '30em'
		}
	},
	textContainer: {
		minWidth: '22em',
		marginRight: '1em',
		color: theme.palette.common.blue,
		[theme.breakpoints.down('xs')]: {
			marginRight: 0
		},
		[theme.breakpoints.down('sm')]: {
			padding: 25
		}
	},
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
	subtitle: {
		...theme.typography.subtitle1,
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
function Restaurants(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Grid container direction='column' className={classes.mainContainer}>
			<Grid item>
				<Grid container justify='flex-start' alignItems='center' direction='row'>
					<Grid className={classes.imageContainer} item sm>
						<img
							className={classes.image}
							src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
							alt='Kain tayo'
						/>
					</Grid>
					<Grid item sm className={classes.textContainer}>
						<Grid item>
							<Typography style={{ textAlign: 'center' }} variant='h2'>
								Kain Tayo
							</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.subtitle} variant='body1'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
								but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
								sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				{' '}
				{/*----CASA DAPITAN BLOCK-----*/}
				<Grid className={classes.restaurantContainer} container direction='row' justify={matchesSM ? 'center' : undefined}>
					<Grid style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }} item>
						<Typography className={classes.headline} variant='h3'>
							Lorem Ipsum is simply dummy text of the printing
						</Typography>
						<Typography variant='subtitle1'>Complete digital solutions, from investigation to</Typography>
						<Button
							component={Link}
							onClick={() => {
								props.setValue(1);
								props.setSelectedIndex(1);
							}}
							to='/casadapitan'
							variant='outlined'
							className={classes.button}>
							<span style={{ marginRight: 10 }}>Menu</span>
							<RestaurantMenuIcon width={10} height={10} fill={theme.palette.common.blue} />
						</Button>
					</Grid>
					<Grid item>
						<img className={classes.icon} alt='Casa Dapitan Custom Icon' src={dapitan} />
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				{' '}
				{/*----GGO CHICKEN BLOCK-----*/}
				<Grid className={classes.restaurantContainer} container direction='row' justify={matchesSM ? 'center' : 'flex-end'}>
					<Grid style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }} item>
						<Typography className={classes.headline} variant='h3'>
							Lorem Ipsum is simply dummy text of the printing
						</Typography>

						<Typography variant='subtitle1'>
							Lorem Ipsum is simply dummy text of the printing
							{matchesSM ? null : <br />}
							Lorem Ipsum
						</Typography>
						<Button
							component={Link}
							onClick={() => {
								props.setValue(1);
								props.setSelectedIndex(1);
							}}
							to='/ggochicken'
							variant='outlined'
							className={classes.button}>
							<span style={{ marginRight: 10 }}>MENU</span>
							<RestaurantMenuIcon width={10} height={10} fill={theme.palette.common.blue} />
						</Button>
					</Grid>
					<Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
						<img className={classes.icon} alt='Ggo GGo Chicken Custom icon' src={goChicken} />
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				{' '}
				{/*----KAINAN NI REMY BLOCK-----*/}
				<Grid className={classes.restaurantContainer} container direction='row' justify={matchesSM ? 'center' : undefined}>
					<Grid style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }} item>
						<Typography className={classes.headline} variant='h3'>
							Lorem Ipsum is simply dummy text of the printing
						</Typography>
						<Typography variant='subtitle1'>Complete digital solutions, from investigation to</Typography>
						<Button
							component={Link}
							onClick={() => {
								props.setValue(1);
								props.setSelectedIndex(1);
							}}
							to='/remy'
							variant='outlined'
							className={classes.button}>
							<span style={{ marginRight: 10 }}>MENU</span>
							<RestaurantMenuIcon width={10} height={10} fill={theme.palette.common.blue} />
						</Button>
					</Grid>
					<Grid item>
						<img className={classes.icon} alt='Kainan ni Remmy Custom Icon' src={kainan} />
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				{' '}
				{/*----Paddy BLOCK-----*/}
				<Grid className={classes.restaurantContainer} container direction='row' justify={matchesSM ? 'center' : 'flex-end'}>
					<Grid style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }} item>
						<Typography className={classes.headline} variant='h3'>
							Lorem Ipsum is simply dummy text of the printing
						</Typography>

						<Typography variant='subtitle1'>
							Lorem Ipsum is simply dummy text of the printing
							{matchesSM ? null : <br />}
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
							<RestaurantMenuIcon width={10} height={10} fill={theme.palette.common.blue} />
						</Button>
					</Grid>
					<Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
						<img className={classes.icon} alt='Paddy Custom icon' src={paddy} />
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				{' '}
				{/*----TSAA BLOCK-----*/}
				<Grid className={classes.restaurantContainer} container direction='row' justify={matchesSM ? 'center' : undefined}>
					<Grid style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }} item>
						<Typography className={classes.headline} variant='h3'>
							Lorem Ipsum is simply dummy text of the printing
						</Typography>
						<Typography variant='subtitle1'>Complete digital solutions, from investigation to</Typography>
						<Button
							component={Link}
							onClick={() => {
								props.setValue(1);
								props.setSelectedIndex(1);
							}}
							to='/tsaa'
							variant='outlined'
							className={classes.button}>
							<span style={{ marginRight: 10 }}>MENU</span>
							<RestaurantMenuIcon width={10} height={10} fill={theme.palette.common.blue} />
						</Button>
					</Grid>
					<Grid item>
						<img className={classes.icon} alt='Tsaa Custom Icon' src={tsaa} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Restaurants;
