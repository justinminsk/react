import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {csv} from 'd3-fetch';
import {stratify, pack} from 'd3-hierarchy';
import {scaleOrdinal} from 'd3-scale';
import dataFile from './redmonds.csv';
// npm install -g create-react-app
// create-react-app face
// npm start
   
async function main(){
	var data = await csv(dataFile);
	
	console.log(data);
	
	var depthColorScale = scaleOrdinal()
							.domain([0,1,2])
							.range(["#A1D6E2", "#1995AD", "#F1F1F2"]);
	
	var stratifyData = stratify()
						.parentId(d=>d.parent)
						.id(d=>d.child);
	
	var stratData = stratifyData(data).sum(()=>1);
	
	console.log(stratData);
	
	var chart = pack()
					.size([1000,1000]);
					
	var chartedData = chart(stratData).descendants();
	
	console.log(chartedData);
	
	var circles = chartedData.map(d=><circle r={d.r} cy={d.y} cx={d.x} stroke="black" fill={depthColorScale(d.depth)} />);
	var circleLabels = chartedData.map(d=>(d.depth===2)?<text x={d.x} y={d.y} textAnchor="middle" >{d.id}</text>:
										(d.depth===1)?<text x={d.x} y={d.y - d.r + 15} textAnchor="middle" >{d.id}</text>:
										<text x={d.x} y={d.y - d.r + 15} textAnchor="middle" >{d.id}</text>);
	
	ReactDOM.render(
		<svg>
			{circles}
			{circleLabels}
		</svg>,
		document.getElementById('root')
	);
}

main();
