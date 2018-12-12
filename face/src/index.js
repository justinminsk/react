import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Face from './faceClass.js';
// npm install -g create-react-app
// create-react-app face
// npm start

var x;
var y;
document.addEventListener('click', printMousePos, true);
function printMousePos(e){

      x = e.pageX;
      y = e.pageY;
      
      ReactDOM.render(
      	<svg>
			<Face skinColor="#fff4d9" scale=".4" x={x} y={y} />
		</svg>,
		document.getElementById('root')
		);
}
