import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, useScrollTrigger, Tabs, Tab, Button, Menu, MenuItem, useMediaQuery, SwipeableDrawer, IconButton, ListItem, ListItemText, List, ListItemIcon  } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import kainTayo from '../assets/kainTayo.png'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';

// raises Header/AppBar
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
		marginBottom: '4.5em',
		[theme.breakpoints.down('md')]: {
			marginBottom: '3em'
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '2em'
		}
	},
	logo: {
		height: '8em',
		marginLeft: '4em',
		[theme.breakpoints.down('md')]: {
			height: '7em'
		},
		[theme.breakpoints.down('xs')]: {
			height: '6em'
		}
	},
	tabContainer: {
		marginLeft: 'auto'
	},
	headline: {
		...theme.typography.headline,
		minWidth: 10,
		marginLeft: '25px',
		color: theme.palette.common.blue
	},
	button: {
		...theme.typography.checkout,
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
		backgroundColor: theme.palette.primary.light,
		color: 'white',
		borderRadius: '0px',
		transition: '0.5s ease-in'
	},
	menuItem: {
		...theme.typography.headline,
		'&:hover': {
			opacity: 1
		},
		opacity: 0.7
	},
	appBar: {
		backgroundColor: 'whitesmoke',
		zIndex:theme.zIndex.modal + 1
	},
	drawerIconContainer: {
		marginLeft: 'auto',		
		'&:hover': {
			backgroundColor: "transparent"
		}
	},
	drawerIcon: {
		height: '50px',
		width: '50px'		
	},
	drawer: {
		backgroundColor: theme.palette.common.blue
	},
	drawerItem: {
		...theme.typography.headline,
		color: "white",
		opacity:0.7
	},
	drawerItemCheckout: {
		backgroundColor: theme.palette.common.orange
	},
	drawerItemSelected: {
		"&.MuiListItemText-root":{
			opacity: 1
		}
	}
}));

function Header(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [openMenu, setOpenMenu] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [openDrawer, setOpenDrawer] = useState(false);

	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	const handleClick = e => {
		setAnchorEl(e.currentTarget);
		setOpenMenu(true);
	};

	const handleClose = e => {
		setAnchorEl(null);
		setOpenMenu(false);
	};

	const handleMenuItemClick = (e, i) => {
		handleClose();
		setSelectedIndex(i);
	};

	//modular code for Mapping menuItems
	const menuOptions = [
		{ name: 'Restaurants', link: '/restaurants',activeIndex:1,selectedIndex:0},
		{ name: 'Casa Dapitan', link: '/casadapitan',activeIndex:1,selectedIndex:1},
		{ name: 'GGO Chicken', link: '/ggochicken',activeIndex:1,selectedIndex:2},
		{ name: 'Kainan ni Remmy', link: '/remy',activeIndex:1,selectedIndex:3},
		{ name: 'Paddy', link: '/paddy',activeIndex:1,selectedIndex:4},
		{ name: 'Tsaa Na', link: '/tsaa',activeIndex:1,selectedIndex:5}
	];
	const routes =[
		{name:'Home',link:'/',activeIndex:0},
		{name:'Restaurants',link:'/restaurants',activeIndex:1,ariaOwns:anchorEl ? 'simple-menu' : undefined,
		ariaPopup:anchorEl ? 'true' : undefined,
		mouseOver:e => handleClick(e)},
		{name:'Products',link:'/products',activeIndex:2},
		{name:'About Us',link:'/about',activeIndex:3},
		{name:'Contact Us',link:'/contact',activeIndex:4}
	]

	//highlights correct headline even on refresh/reload, and makes sure that the path is set correctly
	useEffect(() => {
		//loops through routes and menu options and sets a CASE statement to check for the pathname
		//used for the highlight to set active state
		[...menuOptions, ...routes].forEach(route => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (value !== route.activeIndex) {
						setValue(route.activeIndex);
						if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
							setSelectedIndex(route.selectedIndex);
						}
					}
					break;
				default:
					break;
			}
		});
	}, [value, menuOptions, selectedIndex, routes]);

	//renders when on desktop view
	const desktopView = (
		<React.Fragment>
			<Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor='primary'>		
				{routes.map((route,index)=>
					(<Tab 
						className={classes.headline} 
						component={Link} 
						to={route.link} 
						label={route.name} 
						key={`${route}${index}`} 
						aria-owns={route.ariaOwns} 
						aria-haspopup={route.ariaPopup}
						onMouseOver={route.mouseOver} 
						/>
					))}		
			</Tabs>
			<Button component={Link} to='/checkout' variant='contained' color='secondary' className={classes.button}>
				<ShoppingCartIcon /> Checkout
			</Button>
			<Menu
				classes={{ paper: classes.menu }}
				id='simple-menu'
				anchorEl={anchorEl}
				open={openMenu}
				onClose={handleClose}
				MenuListProps={{ onMouseLeave: handleClose }}
				elevation={0}
				style={{zIndex:1302}}
				keepMounted>
				{menuOptions.map((option, index) => (
					<MenuItem
						key={`${option}${index}`}
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
		</React.Fragment>
	);
	//renders mobile lay out
	const mobileView = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}>
				<div className={classes.toolbarMargin}/>
				<List disablePadding>
				{routes.map((route,index)=>(
					<ListItem key={`${route}${index}`} divider button component={Link} to={route.link} classes={{selected:classes.drawerItemSelected}} selected={value===route.activeIndex}onClick={()=>{setOpenDrawer(false);setValue(route.activeIndex) }}>
						<ListItemText className={classes.drawerItem}disableTypography>{route.name}</ListItemText>
					</ListItem>
				))}
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(5);
						}}
						divider
						button
						component={Link}
						className={classes.drawerItemCheckout}
						to='/checkout'
						selected={value === 5}
						classes={{root:classes.drawerItemCheckout,selected:classes.drawerItemSelected}}>
						<ListItemIcon><ShoppingCartIcon /></ListItemIcon>
						<ListItemText className={classes.drawerItem} disableTypography>
							Checkout
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
				<MenuIcon color="primary"  className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	);
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar className={classes.appBar} position='fixed'>
					<Toolbar disableGutters>
						<Button className={classes.logoContainer} disableRipple onClick={() => setValue(0)} component={Link} to='/'>
							<img alt='company logo' className={classes.logo} src={kainTayo} />
						</Button>
						{matches ? mobileView : desktopView}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
}

export default Header;
