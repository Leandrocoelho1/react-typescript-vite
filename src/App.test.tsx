import {App} from './App'
import {render} from '@testing-library/react'

describe('<App/>', () => {
  it('renders', () => {
    render(<App/>)

    expect(true).toBe(true)
  })
})