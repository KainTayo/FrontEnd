import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, useScrollTrigger, Tabs, Tab, Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import kainTayo from '../assets/KainTayo.png';
import { Link } from 'react-router-dom';
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
		marginBottom: '3em'
	},
	logo: {
		height: '8em',
		marginLeft: '4em'
	},
	tabContainer: {
		marginLeft: 'auto',
		marginRight:'auto'
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
		color: theme.palette.common.blue
	},
	button: {
		...theme.typography.estimate,
		borderRadius: '50px',
		marginLeft: '50px',
		marginRight: '25px',
		height: '45px'
	},
	logoContainer: {
		padding: 0,
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	menu: {
		backgroundColor: theme.palette.common.blue,
		color: 'white',
		borderRadius: '0px'
	},
	menuItem: {
		...theme.typography.tab,
		'&:hover': {
			opacity: 1
		},
		opacity: 0.7
	},
	appBar: {
		backgroundColor: 'whitesmoke'
	}
}));

function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleChange = (e, value) => {
		setValue(value);
	};

	const handleClick = e => {
		setAnchorEl(e.currentTarget);
		setOpen(true);
	};

	const handleClose = e => {
		setAnchorEl(null);
		setOpen(false);
	};

	const handleMenuItemClick = (e, i) => {
		handleClose();
		setSelectedIndex(i);
	};

	const menuOptions = [
		{ name: 'Restaurants', link: '/restaurants' },
		{ name: 'Casa Dapitan', link: '/casadapitan' },
		{ name: 'GGO Chicken', link: '/ggochicken' },
		{ name: 'Kainan ni Remmy', link: '/remy' },
		{ name: 'Paddy', link: '/paddy' },
		{ name: 'Tsaa Na', link: '/tsaa' }
	];

	useEffect(() => {
		if (window.location.pathname === '/' && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === '/services' && value !== 0) {
			setValue(1);
		} else if (window.location.pathname === '/revolution' && value !== 0) {
			setValue(2);
		} else if (window.location.pathname === '/about' && value !== 0) {
			setValue(3);
		} else if (window.location.pathname === '/contact' && value !== 0) {
			setValue(4);
		} else if (window.location.pathname === '/estimate' && value !== 0) {
			setValue(5);
		}
	}, [value]);

	return (
		<>
			<ElevationScroll>
				<AppBar className={classes.appBar} position='fixed'>
					<Toolbar disableGutters>
						<Button className={classes.logoContainer} disableRipple onClick={() => setValue(0)} component={Link} to='/'>
							<img alt='company logo' className={classes.logo} src={kainTayo} />
						</Button>

						<Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor='primary'>
							<Tab className={classes.tab} component={Link} to='/' label='Home' />
							<Tab
								aria-owns={anchorEl ? 'simple-menu' : undefined}
								aria-haspopup={anchorEl ? 'true' : undefined}
								className={classes.tab}
								component={Link}
								onMouseOver={e => handleClick(e)}
								to='/restaurants'
								label='Restaurants'
							/>
							<Tab className={classes.tab} component={Link} to='/products' label='Products' />
							<Tab className={classes.tab} component={Link} to='/about' label='About Us' />
							<Tab className={classes.tab} component={Link} to='/contact' label='Contact Us' />
						</Tabs>
						<Button component={Link} to='/checkout' variant='contained' color='secondary' className={classes.button}>
							<ShoppingCartIcon /> Checkout
						</Button>
						<Menu
							classes={{ paper: classes.menu }}
							id='simple-menu'
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{ onMouseLeave: handleClose }}
							elevation={0}>
							{menuOptions.map((option, index) => (
								<MenuItem
									key={option}
									classes={{ root: classes.menuItem }}
									onClick={e => {
										handleMenuItemClick(e, index);
										setValue(1);
										handleClose();
									}}
									selected={index === selectedIndex && value === 1}
									component={Link}
									to={option.link}>
									{option.name}
								</MenuItem>
							))}
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</>
	);
}

export default Header;
