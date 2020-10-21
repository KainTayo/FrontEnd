import { createMuiTheme } from '@material-ui/core/styles';

const kainTayoBlue = '#134287';
const kainTayoOrange = '#ffbf73';

export default createMuiTheme({
	palette: {
		common: {
			blue: `${kainTayoBlue}`,
			orange: `${kainTayoOrange}`
		},
		primary: {
			main: `${kainTayoBlue}`
		},
		secondary: {
			main: `${kainTayoOrange}`
		}
	},
	typography: {
        headline:{
            fontFamily:'Montserrat',
            textTransform:'none',
            fontWeight:'700',
            fontSize:'1rem',
        },
        checkout:{
            fontFamily: "Lato",
            fontSize:"1rem",
            textTransform:"none",
            color:"white"
		},
		h1:{
			fontFamily:"'Montserrat', 'sans-serif'"
		},
		h2:{
			fontFamily: "'Montserrat', 'sans-serif'"
		},
		h3:{
			fontFamily: "'Montserrat', 'sans-serif'"
		},
		h4:{
			fontFamily: "'Montserrat', 'sans-serif'"
		},
		h5:{
			fontFamily: "'Montserrat', 'sans-serif'"
		},
		h6:{
			fontFamily: "'Montserrat', 'sans-serif'"
		},
		body1:{
			fontFamily: "'Lato', 'sans-serif'"		
	
		},
		body2:{
			fontFamily: "'Lato', 'sans-serif'"		
	
		},
		subtitle1:{
			marginBottom: '1em',
			lineHeight:'1',
			textAlign:'justify',
			marginTop: '1rem',
			fontFamily:'Lato',
			color:"	#808080	"       
	
		}		
	}
});
