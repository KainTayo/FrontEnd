import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	item: {
		width: '45%',
		margin: 'auto'
	},
	text:{
		paddingLeft:'2em'
		
	},
	image: {
		width: '100%'
	},
	container: {
		marginBottom: '4em',
		[theme.breakpoints.down('xs')]: {
			marginTop: '3em',
			marginBottom: '3em'
		}
	}
}));

function About() {
	const classes = useStyles();

	return (
		<Container className={classes.container} maxWidth='xl'>
			<div className={classes.root}>
				<Grid container justify='center'>
					<Grid className={classes.item} xs={12} md={6} item>
						<div>
							<img
								className={classes.image}
								src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
								alt='Kain tayo'
							/>
						</div>
					</Grid>
					<Grid className={classes.item} xs={12} md={6} item>
						<Grid className={classes.text} container direction='column' justify='space-evenly' alignItems='center'>
							<Grid item>
								<Typography variant='h3'>Kain Tayo</Typography>
							</Grid>
							<Grid item>
								<Typography variant='body1'>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
									the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
									centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
									Lorem Ipsum.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Container>
	);
}

export default About;
