import React from 'react';

const Branch = (props) => {
	return(
			<g transform={"scale("+props.scale+","+props.scale+") translate("+props.movex+","+props.movey+") rotate("+props.angle+",250,250)"} >
				<line x1="225" x2="275" y1="250" y2="250" stroke="black" strokeWidth="1" />
				<circle cx="250" cy="250" r="5" fill={props.fill} stroke="black" />
				<circle cx="275" cy="250" r="5" fill={props.fill} stroke="black" />
				<circle cx="225" cy="250" r="5" fill={props.fill} stroke="black" />
			</g>
	);
};

export default Branch;
