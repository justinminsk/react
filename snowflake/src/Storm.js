import React from 'react';
import './index.css';
import Flake from './Flake.js';



class Storm extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			colors: this.props.data.filter(d=>d.name==="one"),
		}
		this.handleChange = this.handleChange.bind(this);
	};
	
	 handleChange(event) {
	 	console.log(event.target.value);
    	this.setState({
			colors: this.props.data.filter(d=>d.name===event.target.value),
		});
  }
	
	makeFlakes = () => {
		let flakes = [];
		let flake = "";
		var scale = 0;
		var movex = 0;
		var movey = 0;
		for(var i=0;i<100;i++){
			scale = (Math.random()/2) +.1;
			movex = (Math.round(Math.random()) * 2 - 1) * Math.random() * 700 + 100;
			movey = (Math.round(Math.random()) * 2 - 1) * Math.random() * 700 + 100;
			flake = <Flake fill={this.state.colors[0].flakeFill} scale={scale} movex={movex} movey={movey} />;
			flakes.push(flake);
		};
		console.log(flakes);
		return flakes;
	};
	
	render(){
		return(
			<div>
				<svg>
					<rect height="500" width="500" fill={this.state.colors[0].background} />
					{this.makeFlakes()}
				</svg>
				<select value={this.state.value} onChange={this.handleChange}>
			        <option value='one'>one</option>
			        <option value='two'>two</option>
			        <option value='three'>three</option>
			        <option value='four'>four</option>
    			</select>
			</div>
		);
	};
};

export default Storm;