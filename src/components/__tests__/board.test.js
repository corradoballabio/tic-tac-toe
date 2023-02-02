import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'

import Board from '../board'

afterEach(() => {
  cleanup()
})

test('render 3x3 square grid', () => {
  const squares = Array(9).fill(null)
  render(<Board
    squares={squares}
    winningCombo={[]}
  />)

  const boardElement = screen.getByTestId('board')
  const row1Element = screen.getByTestId('row0')
  const row2Element = screen.getByTestId('row3')
  const row3Element = screen.getByTestId('row6')
  const sq1Element = screen.getByTestId('sq1')
  const sq2Element = screen.getByTestId('sq4')
  const sq3Element = screen.getByTestId('sq7')

  expect(boardElement).toContainElement(row1Element)
  expect(boardElement).toContainElement(row2Element)
  expect(boardElement).toContainElement(row3Element)

  expect(row1Element).toContainElement(sq1Element)
  expect(row2Element).toContainElement(sq2Element)
  expect(row3Element).toContainElement(sq3Element)

  let rows = [row1Element, row2Element, row3Element]

  rows.forEach(row => {
    expect(row).toContainHTML('div')
    expect(row).toContainHTML('button')
  });
})
