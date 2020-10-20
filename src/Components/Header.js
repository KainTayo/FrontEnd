import React from 'react';
import { Button, ButtonGroup, useScrollTrigger, Toolbar, AppBar } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import KainTayo from '../assets/KainTayo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function ElevationScroll(props) {
	const { children } = props;
	//shows app bar as floating on scrolling
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	//cloning children and creates elevation
	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}

const useStyles = makeStyles(theme => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '5em'
	},
	logo: {
		height: '8em'
	},
	buttonContainer: {
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	logoContainer: {
		padding: 0,
		'&:hover': {
			backgroundColor: 'transparent'
		},
		marginLeft: '30px'
	},
	cartContainer: {
		marginLeft: '50px',
		marginRight: '25px'
	}
}));

export default function Header() {
	const classes = useStyles();

	return (
		<>
			<ElevationScroll>
				<AppBar color='secondary'>
					<Toolbar disableGutters>
						<Button className={classes.logoContainer} disableRipple component={RouterLink} to='/'>
							<img alt='company logo' className={classes.logo} src={KainTayo} />
						</Button>
						<ButtonGroup className={classes.buttonContainer} variant='text' color='inherit'>
							<Button component={RouterLink} to='/'>
								Home
							</Button>
							<Button component={RouterLink} to='/products'>
								Products
							</Button>
							<Button component={RouterLink} to='/casadapitan'>
								Casa Dapitan
							</Button>
							<Button component={RouterLink} to='/ggochicken'>
								Ggo Ggo Chickin
							</Button>
							<Button component={RouterLink} to='/kaninanniremy'>
								Kainan ni Remy
							</Button>
							<Button component={RouterLink} to='/paddy'>
								Paddy
							</Button>
							<Button component={RouterLink} to='/tsaa'>
								Tsaa Na!
							</Button>
						</ButtonGroup>
						<ShoppingCartIcon className={classes.cartContainer} color='inherit'></ShoppingCartIcon>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</>
	);
}
