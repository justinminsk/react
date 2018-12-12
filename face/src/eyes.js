import React from 'react';


const Eyes = (props) => {
	return(
		<circle cx={props.cx} cy={props.cy} r={props.r} fill={props.fill} stroke="black" stroke-width="50" />
	);
};


export default Eyes;
