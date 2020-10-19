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

function HowToOrder() {
	const classes = useStyles();

	return (
		<Container className={classes.container} maxWidth="lg">
			<div className={classes.root}>
				<Grid className={classes.flex} container>
					<Grid className={classes.flex} item xs={4}>
						<HowToOrderCard className={classes.paper} />
					</Grid>
					<Grid className={classes.flex} item xs={4}>
						<HowToOrderCard className={classes.paper} />
					</Grid>
					<Grid className={classes.flex} item xs={4}>
						<HowToOrderCard className={classes.paper} />
					</Grid>
				</Grid>
			</div>
		</Container>
	);
}

export default HowToOrder;
