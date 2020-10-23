import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import HouseIcon from '@material-ui/icons/House';
import { Link } from 'react-router-dom'

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
			marginBottom: '1.5em',
			paddingLeft:'1em',
			paddingRight:'1em'
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
		color:theme.palette.common.blue,
		[theme.breakpoints.down('xs')]: {
			marginRight: 0
		}
	},	
	button: {
		...theme.typography.headline,
		backgroundColor: theme.palette.common.blue,
		color:"white",
		borderRadius: 50,
		height: 45,
		width: 145,
		marginRight: 40,
		'&:hover': {
			backgroundColor: theme.palette.primary.light
		},
		marginTop:40,
		[theme.breakpoints.down('xs')]: {
			marginTop:20
		}
	},
	body:{
		lineHeight:'1.5',
		textAlign:'justify',
		marginTop: '1.5rem',
		[theme.breakpoints.down('xs')]: {
			marginTop:'1rem'
		}		
	}
}));

function About(props) {
	const classes = useStyles();

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
							<Typography style={{ textAlign: 'center' }} variant='h3'>
								Kain Tayo
							</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.body} variant='body1'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
								but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
								sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.
							</Typography>
						</Grid>
						<Grid container justify='center'>
							<Grid item>
								<Button component={Link} to="/products" onClick={()=> props.setValue(2)} className={classes.button} variant='container'>
									<RestaurantMenuIcon />
									Full Menu
								</Button>
							</Grid>
							<Grid item>
								<Button component={Link}
								onClick={()=> props.setValue(1)}
								 to="/restaurants"
								className={classes.button}variant='container'>
									<HouseIcon />
									<span style={{ marginLeft: 3 }}>Restaurants</span>
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default About;
