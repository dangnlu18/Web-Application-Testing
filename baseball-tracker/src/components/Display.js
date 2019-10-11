import React from 'react';

function Display(props){

	return (
		<div className="display">
			<h3> Balls: {props.numbers.balls} </h3>
			<h3> Strikes: {props.numbers.strikes}</h3>
		</div>
		)
}

export default Display;