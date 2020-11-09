import React from 'react';
import HowToOrder from '../Components/HowToOrder'
import SignUp from '../Components/SignUp'
import Info from '../Components/Info'
import About from '../Components/About'



function Home(props) {	
	return (
		<div>
			<About value={props.value} setValue={props.setValue} selectedIndex={props.selectedIndex} setSelectedIndex={props.setSelectedIndex} />
			<Info />
			<SignUp />
			<HowToOrder />			
		</div>
	);
}

export default Home;
