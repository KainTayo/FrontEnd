import React from 'react';
import emailjs from 'emailjs-com';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	signUpContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
        height: '10rem',
		marginBottom: '30px',
        marginTop: '30px',
        backgroundColor:'#134287',
      
	},
	textContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
        textAlign: 'center',
        marginLeft:'30px',
    },
    button: {
        height:'2rem',
        marginLeft:'20px',
        marginRight:'20px',
        color:'white'
    },
    form :{
        height:'1rem',
        width:'50%'
    }
}));

function SignUp() {
	const classes = useStyles();

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
		<div className={classes.signUpContainer}>
			<form className='contact-form' onSubmit={sendEmail}>
				<label>Email</label>
				<input className={classes.form} type='email' name='user_email' />
				<Button className={classes.button}  type="submit" size="large" variant="text" >
					Signup
				</Button>
			</form>
			<div className={classes.textContainer}>
				<Typography variant='h4'>Sign up For Huge Discounts</Typography>
			</div>
		</div>
	);
}

export default SignUp;
