import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    aboutContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    imgContainer:{
        width:'40%',
        margin:'25px'
    },
    img:{
        width:"100%"
    },
    textContainer:{
        width:'40%',
        marginRight:'30px',
    }

}));

function About() {
    const classes = useStyles()

	return (
		<div className={classes.aboutContainer}>
			<picture className={classes.imgContainer}>
				<img className={classes.img}
					src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
					alt='Kain tayo'
				/>
			</picture>
			<div className={classes.textContainer}>
				<Typography variant="h3">Kain Tayo</Typography>
				<Typography variant="body1">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
					the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
					Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</Typography>
			</div>
		</div>
	);
}

export default About;
