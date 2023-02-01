import React from "react"
import Board from './board.js'

class Game extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			history: [{
				squares: Array(9).fill(null),
				move: null
			}],
			xIsNext: true,
			stepNumber: 0,
			isSortedAsc: true
		}
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1)
		const current = history[history.length - 1]
		const squares = current.squares.slice()

		if(calculateWinner(squares).player || squares[i]) return

		squares[i] = this.state.xIsNext ? 'X' : 'O'

		this.setState({
			history: history.concat([{
				squares: squares,
				move: getGridPosition(i)
			}]),
			xIsNext: !this.state.xIsNext,
			stepNumber: history.length
		})
	}

	jumpTo(step) {
		this.setState({
			xIsNext: step%2 === 0,
			stepNumber: step
		})
	}

	setSortingOrder() {
		this.setState({
			isSortedAsc: !this.state.isSortedAsc
		})
	}

	render() {
		const history = this.state.history
		const current = history[this.state.stepNumber]
		const winner = calculateWinner(current.squares)

		const moves = history.map((step, move) => {
			let currentPlayer = move%2===0 ? 'O' : 'X'
			let isCurrentMove = this.state.stepNumber === move

			const desc = (isCurrentMove ? '-> ' : '') +
				(move ?
					`Go to move #${move}: '${currentPlayer}' in [${step.move}]`:
					'Go to game start')

			return (
				<li key={move}>
					<button
						className={this.state.stepNumber === move ? 'highlightedHistoryItem' : null}
						onClick={() => this.jumpTo(move)}
					>
						{desc}
					</button>
				</li>
			)
		}).sort(() => this.state.isSortedAsc ? -1 : 1)

		let status
		if(!current.squares.includes(null) && !winner.player) {
			status = 'The match ended in a tie'
		} else if (winner.player) {
			status = 'Winner: ' + winner.player
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}

		let sortOrder = this.state.isSortedAsc ? 'Descending' : 'Ascending'

		const sorting = <button onClick={() => this.setSortingOrder()}>Sort {sortOrder}</button>

		return (
			<div className="game">
				<div className="game-board">
					<Board
						squares={current.squares}
						onClick={(i) => this.handleClick(i)}
						winningCombo={winner.combo}
					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<div>{sorting}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	let winner = {
		player: null,
		combo: []
	}

	for(let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i]

		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			winner.player = squares[a]
			winner.combo= [a, b, c]
		}
	}
	return winner
}

function getGridPosition(i) {
	return [Math.trunc(i/3) + 1, (i%3) + 1]
}

export default Game