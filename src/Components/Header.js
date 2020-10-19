import React from 'react';
import { Button, ButtonGroup, Menu, MenuItem } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

export default function Header() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ButtonGroup variant='text' color='primary' aria-label='text primary button group'>
				<RouterLink to='/'>
					{' '}
					<Button>Home</Button>
				</RouterLink>

				<Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
					Restaurants
				</Button>
				<Button to='/'>Lorem</Button>
				<Button to='/'>Ipsum</Button>
				<Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
					<RouterLink to='/restaurant'>
						<MenuItem onClick={handleClose}>Kain Tayo</MenuItem>
					</RouterLink>

					<MenuItem onClick={handleClose}>Kain Tayo</MenuItem>
					<MenuItem onClick={handleClose}>Kain Tayo</MenuItem>
					<MenuItem onClick={handleClose}>Kain Tayo</MenuItem>
					<MenuItem onClick={handleClose}>Kain Tayo</MenuItem>
				</Menu>
			</ButtonGroup>
		</div>
	);
}
