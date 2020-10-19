import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import dog from '../grab.png';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
        textAlign: 'center',
        backgroundColor:'inherit',
        
	}
});

function HowToOrderCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia component='img' alt='Contemplative Reptile' height='240' image={dog} title='Contemplative Reptile' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						Delivery
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default HowToOrderCard;
