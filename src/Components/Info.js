import React from 'react';
import HowToOrderCard from './HowToOrderCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	flex: {
		display: 'flex',
		justifyContent: 'center'
    },
    container:{
        marginBottom:50
    }
}));

function Info() {
	const classes = useStyles();

	return (
		<Container className={classes.container} maxWidth="xl">
			<div className={classes.root}>
				<Grid className={classes.flex} container>
					<Grid className={classes.flex} item xs={12} s={6} md>
						<HowToOrderCard className={classes.paper} />
					</Grid>
					<Grid className={classes.flex} item xs={12} s={6} md>
						<HowToOrderCard className={classes.paper} />
					</Grid>
					<Grid className={classes.flex} item xs={12} s={6} md>
						<HowToOrderCard className={classes.paper} />
					</Grid>
				</Grid>
			</div>
		</Container>
	);
}

export default Info;
