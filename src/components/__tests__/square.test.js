import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

import Square from '../square'

afterEach(() => {
  cleanup()
})

test('rendering square component', () => {
  render(<Square testId={1} value={'value-1'}/>)

  const squareElement = screen.getByTestId('sq1')

  expect(squareElement).toBeInTheDocument()
  expect(squareElement).toHaveTextContent('value-1')
  expect(squareElement).toContainHTML('button')
})

test('matches square snapshot', () => {
  const tree = renderer.create(<Square testId={1}/>).toJSON()
  expect(tree).toMatchSnapshot()
})