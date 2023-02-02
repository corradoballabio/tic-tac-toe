function Square(props) {
	return (
		<button data-testid={'sq'+props.testId} className={`square ${props.winnerSquare && 'highlightedSquare'}`} onClick={props.onClick}>
			{props.value}
		</button>
	)
}

export default Square