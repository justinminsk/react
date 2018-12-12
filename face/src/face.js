import React from 'react';
import Skin from './Skin.js';
import Nose from './nose.js';
import Eyes from './eyes.js';
import Mouth from './mouth.js';

const Face = (props) => {
	return(
			<g transform={"translate("+props.x+", "+props.y+") scale("+props.scale+") translate(-750, -500)"}>
				<Skin color={props.skinColor} />
				<Nose points="750,600 800,650 700,650" />
				<Eyes cx="300" cy="500" r="45" fill={props.eyeColor} />
				<Eyes cx="1200" cy="500" r="45" fill={props.eyeColor} />
				<Mouth d="M700,750 a1,1 0 0,0 100,0" />
			</g>
	);
};

export default Face;
