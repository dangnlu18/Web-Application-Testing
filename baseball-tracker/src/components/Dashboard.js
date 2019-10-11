import React, { useState, useEffect } from 'react';
import Display from './Display';

function Dashboard(){
	const [numbers, setNumbers] = useState({
		balls: 0,
		strikes: 0
	})

	useEffect(()=>{
		if(numbers.balls >3 || numbers.strikes >2){
			setNumbers({
				balls: 0,
				strikes: 0
			})
		}

	},[numbers.balls, numbers.strikes])

	const handleStrike = () => {
		setNumbers({
			balls: numbers.balls,
			strikes: numbers.strikes + 1
		})
	}

	const handleFoul = () => {
		if(numbers.strikes ===2){
			return numbers
		}
		else{
			setNumbers({
				balls: numbers.balls,
				strikes: numbers.strikes + 1
			})
		}
	}	

	const handleBalls = () => {
		setNumbers({
			balls: numbers.balls + 1,
			strikes: numbers.strikes
		})
	}
	const handleHit = () => {
		setNumbers({
			balls: 0,
			strikes: 0
		})
	}	

	return(
		<div className="dashboard">
			<Display numbers={numbers} />
			<button onClick={handleStrike}>Strike</button>
			<button onClick={handleBalls}>Ball</button>
			<button onClick={handleFoul}>Foul</button>
			<button onClick={handleHit}>Hit</button>
		</div>
		)
}

export default Dashboard;