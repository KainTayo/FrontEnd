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


const useStyles = makeStyles((theme) => ({
	appBar: {
		top: 'auto',
        bottom: 0,
        display:'flex',
        justifyContent:'center',
		alignItems:'center',
		marginTop:20
		
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
	}
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position='fixed' color='primary' className={classes.appBar}>
				<Toolbar>
					<IconButton color='inherit'>
						<FacebookIcon />
					</IconButton>
					<IconButton color='inherit'>
						<InstagramIcon />
					</IconButton>
					<IconButton color='inherit'>
						<PinterestIcon />
					</IconButton>
					<IconButton color='inherit'>
						<TwitterIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}
