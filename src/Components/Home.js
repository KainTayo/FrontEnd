import React from 'react';
import HowToOrder from './HowToOrder';
import About from './About';
import Info from './Info';
import SignUp from './SignUp';

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
