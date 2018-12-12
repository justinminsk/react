import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Storm from './Storm.js';
// npm install -g create-react-app
// create-react-app face
// npm start


async function main(){
	
	var data = [
			{name:"one", background:"#f83926", flakeFill:"#e1dcdb"},
			{name:"two", background:"#82b7da", flakeFill:"#b6c6d6"},
			{name:"three", background:"#dfbac1", flakeFill:"#b6a5be"},
			{name:"four", background:"#ebd3ad", flakeFill:"#adacb6"},
			];
	
	console.log(data);
	
	ReactDOM.render(
		<Storm data={data} />,
		document.getElementById('root')
	);
};
	
main();
