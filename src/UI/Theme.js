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
        tab:{
            fontFamily:'Raleway',
            textTransform:'none',
            fontWeight:'700',
            fontSize:'1rem',
        },
        checkout:{
            fontFamily: "Pacifico",
            fontSize:"1rem",
            textTransform:"none",
            color:"white"
        }
	}
});
