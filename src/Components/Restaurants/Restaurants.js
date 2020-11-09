import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Typography, useMediaQuery, Grid } from '@material-ui/core';
import CasaDapitanHeader from '../RestaurantHeaders/CasaDapitanHeader';
import KainanNiRemyHeader from '../RestaurantHeaders/KainanNiRemyHeader';
import PaddyHeader from '../RestaurantHeaders/PaddyHeader';
import TsaaNaHeader from '../RestaurantHeaders/TsaaNaHeader';
import GgoGgoChickenHeader from '../RestaurantHeaders/GgoChickenHeader';

const useStyles = makeStyles(theme => ({
	mainContainer: {
		marginTop: '3.5em',
		marginBottom: '3em',
		[theme.breakpoints.down('md')]: {
			marginTop: '2.5em',
			marginBottom: '2em'
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '2em',
			marginBottom: '1.5em'
		}
	},
	image: {
		height: '100%',
		width: '100%'
	},
	imageContainer: {
		maxWidth: '50em',
		minWidth: '21em',
		marginTop: '2em',
		marginRight: '7%',
		marginLeft: '3%',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '30em'
		}
	},
	textContainer: {
		minWidth: '22em',
		marginRight: '1em',
		color: theme.palette.common.blue,
		[theme.breakpoints.down('xs')]: {
			marginRight: 0
		},
		[theme.breakpoints.down('sm')]: {
			padding: 25
		}
	},
	subtitle: {
		...theme.typography.subtitle1,
		[theme.breakpoints.down('xs')]: {
			margin: '0 auto'
		}
	}
}));

function Restaurants(props) {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Grid container direction='column' className={classes.mainContainer}>
			<Grid item>
				<Grid container justify='flex-start' alignItems='center' direction='row'>
					<Grid className={classes.imageContainer} item sm>
						<img
							className={classes.image}
							src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
							alt='Kain tayo'
						/>
					</Grid>
					<Grid item sm className={classes.textContainer}>
						<Grid item>
							<Typography style={{ textAlign: 'center' }} variant='h2'>
								Kain Tayo
							</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.subtitle} variant='body1'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
								but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
								sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
								Ipsum.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<CasaDapitanHeader
				matchesSM={matchesSM}
				theme={theme}
				value={props.value}
				setValue={props.setValue}
				selectedIndex={props.selectedIndex}
				setSelectedIndex={props.setSelectedIndex}
			/>
			<GgoGgoChickenHeader
				matchesSM={matchesSM}
				theme={theme}
				value={props.value}
				setValue={props.setValue}
				selectedIndex={props.selectedIndex}
				setSelectedIndex={props.setSelectedIndex}
			/>
			<KainanNiRemyHeader
				matchesSM={matchesSM}
				theme={theme}
				value={props.value}
				setValue={props.setValue}
				selectedIndex={props.selectedIndex}
				setSelectedIndex={props.setSelectedIndex}
			/>
			<PaddyHeader
				matchesSM={matchesSM}
				theme={theme}
				value={props.value}
				setValue={props.setValue}
				selectedIndex={props.selectedIndex}
				setSelectedIndex={props.setSelectedIndex}
			/>
			<TsaaNaHeader
				matchesSM={matchesSM}
				theme={theme}
				value={props.value}
				setValue={props.setValue}
				selectedIndex={props.selectedIndex}
				setSelectedIndex={props.setSelectedIndex}
			/>
		</Grid>
	);
}

export default Restaurants;
