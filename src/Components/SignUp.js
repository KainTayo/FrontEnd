import React from 'react';
import emailjs from 'emailjs-com';
import { Typography, Button, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles,useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	signUpContainer: {
		height: '12rem',
		marginBottom: '30px',
		marginTop: '30px',
		backgroundColor: theme.palette.secondary.light
	},
	button: {
		...theme.typography.headline,
		backgroundColor: theme.palette.common.blue,
		color:"white",
		borderRadius: 50,
		height: 45,
		width: 145,
		marginLeft:30,
		'&:hover': {
			backgroundColor: theme.palette.primary.light
		}
	},
	form:{
		height: 45,
		width: 250,
		borderRadius: 50,
		marginTop: '2em'
	}
}));

function SignUp() {
	const classes = useStyles();
	const theme = useTheme()
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
	

	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID').then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
	}

	return (
		<Grid direction="column" alignItems="center" justify="center" container className={classes.signUpContainer}>
			<Typography style={{textShadow:"1px 1px 2px black"}} variant={matchesSM ? "h5" : "h3"}>Join for Promotions and Discounts</Typography>
			<form className='contactForm' onSubmit={sendEmail}>
				<input className={classes.form} type='email' name='user_email' placeholder="Enter Email Address"
				style={{textAlign:"center",fontSize:"16px"}}
				/>
				<Button className={classes.button} type='submit' size='large' variant='text'>
					Signup
				</Button>
			</form>
		</Grid>
	);
}

export default SignUp;
