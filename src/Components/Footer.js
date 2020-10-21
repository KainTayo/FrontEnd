import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
	appBar: {
		top: 'auto',
		bottom: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	grow: {
		flexGrow: 1
	},
	fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto'
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '4.5em',
		[theme.breakpoints.down('md')]: {
			marginBottom: '3em'
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '2em'
		}
	}
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<footer>
			<div className={classes.toolbarMargin} />
			<CssBaseline />
			<AppBar position='fixed' color='primary' className={classes.appBar}>
				<Toolbar>
					<IconButton component={"a"} href="https://www.facebook.com/kaintayo.shop" rel="noopener noreferrer" target="_blank" color='inherit'>
						<FacebookIcon />
					</IconButton>
					<IconButton component={"a"} href="https://www.instagram.com/kaintayo.shop/" rel="noopener noreferrer" target="_blank"  color='inherit'>
						<InstagramIcon />
					</IconButton>
					<IconButton component={"a"} href="https://www.instagram.com/mcm_akol/" rel="noopener noreferrer" target="_blank" color='inherit'>
						<PinterestIcon />
					</IconButton>
					<IconButton component={"a"} href="https://www.instagram.com/mcm_akol/" rel="noopener noreferrer" target="_blank" color='inherit'>
						<TwitterIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</footer>
	);
}
