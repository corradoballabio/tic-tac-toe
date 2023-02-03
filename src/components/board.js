import Square from "./square";

function Board(props) {
	const matrix = props.squares.reduce((m, k, i) => {
		i % 3 === 0 ? m.push([k]) : m[m.length-1].push(k)
    return m;
	}, [])

	const squareGrid = matrix.map((row, i) => {
		return (<div key={i} data-testid={'row'+i} className="board-row">
			{row.map((_, j) => {
				let index = 3*i + j
				return (
					<Square
						testId={index}
						winnerSquare={props.winningCombo.includes(index)}
						value={props.squares[index]}
						onClick={() => props.onClick(index)}
					/>
				)
			})}
		</div>)
	})

	return (
		<div data-testid={'board'}>
			{squareGrid}
		</div>
	);
}

export default Board