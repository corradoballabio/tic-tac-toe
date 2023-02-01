import {render, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'

import Square from '../square'

afterEach(() => {
  cleanup()
})

test('rendering square component', () => {
  render(<Square testId={'test-1'} value={'value-1'}/>)

  const squareElement = screen.getByTestId('test-1')

  expect(squareElement).toBeInTheDocument()
  expect(squareElement).toHaveTextContent('value-1')
  expect(squareElement).toContainHTML('button')
})
