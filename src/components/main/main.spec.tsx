import { describe } from 'node:test'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Main } from './main'

describe('Test Table', () => {
  it.only('deve rendelizar a table corretamente', () => {
    render(<Main />)

    expect(screen.getByLabelText(/mercadoria/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/valor/i)).toBeInTheDocument()
  })
})
