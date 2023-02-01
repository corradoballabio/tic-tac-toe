import Square from "./square";

function Board(props) {
	const squareGrid = props.squares.map((_, i) => {
		if(i % 3 === 0) return (
			<div key={i} className="board-row">
				<Square
					winnerSquare={props.winningCombo.includes(i)}
					value={props.squares[i]}
					onClick={() => props.onClick(i)}
				/>
				<Square
					winnerSquare={props.winningCombo.includes(i+1)}
					value={props.squares[i+1]}
					onClick={() => props.onClick(i+1)}
				/>
				<Square
					winnerSquare={props.winningCombo.includes(i+2)}
					value={props.squares[i+2]}
					onClick={() => props.onClick(i+2)}
				/>
			</div>
		)
		return null
	})

	return (
		<div>
			{squareGrid}
		</div>
	);
}

export default Board