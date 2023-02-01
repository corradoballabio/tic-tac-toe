function Square(props) {
	return (
		<button className={`square ${props.winnerSquare && 'highlightedSquare'}`} onClick={props.onClick}>
			{props.value}
		</button>
	)
}

export default Square