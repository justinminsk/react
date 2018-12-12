import React from 'react';
import Skin from './Skin.js';
import Nose from './nose.js';
import Eyes from './eyes.js';
import Mouth from './mouth.js';

class Face extends React.Component{
	
	
	constructor(props){
		super(props);		
		this.state={
			eyeColor:"red"
		}
	}
	
	
	eyesChange = () => {
		if (this.state.eyeColor == "red"){
		this.setState({
			eyeColor: "black"
		});
		}
		else{
			this.setState({
			eyeColor: "red"
		});
		}
	}
	
	
	render(){
		return(
			<g transform={"translate("+this.props.x+", "+this.props.y+") scale("+this.props.scale+") translate(-750, -500)"} onClick={this.eyesChange} >
				<Skin color={this.props.skinColor} />
				<Nose points="750,600 800,650 700,650" />
				<Eyes cx="300" cy="500" r="45" fill={this.state.eyeColor} />
				<Eyes cx="1200" cy="500" r="45" fill={this.state.eyeColor} />
				<Mouth d="M700,750 a1,1 0 0,0 100,0" />
			</g>
		);
	}
	
	
}

export default Face;
