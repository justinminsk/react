import React from 'react';


const Skin = (props) => {
	return(
		<circle r="500" cx="750" cy="500" fill={props.color} stroke="black" />
	);
};


export default Skin;
