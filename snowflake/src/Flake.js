import React from 'react';
import Branch from './Branch.js';

const Flake = (props) => {
	return(
			<g>
				<Branch fill={props.fill} angle="0" scale={props.scale} movex={props.movex} movey={props.movey} />
				<Branch fill={props.fill} angle="60" scale={props.scale} movex={props.movex} movey={props.movey} />
				<Branch fill={props.fill} angle="120" scale={props.scale} movex={props.movex} movey={props.movey} />
			</g>
	);
};

export default Flake;
