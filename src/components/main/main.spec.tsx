import { describe } from 'node:test'

import '@testing-library/jest-dom'
import {
  fireEvent,
  getAllByText,
  getByText,
  render,
  screen,
  waitFor,
} from '@testing-library/react'
import { Main } from './main'
import userEvent from '@testing-library/user-event'
import { Form } from './Form/Form'

const handleFormSubmit = jest.fn()

describe('Test Table', () => {
  it('deve rendelizar a table corretamente', () => {
    render(<Main />)

    expect(screen.getByLabelText(/mercadoria/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/valor/i)).toBeInTheDocument()
  })

  it.only('deve rendelizar um item da table corretamente', async () => {
    handleFormSubmit.mockImplementation((event) => {
      event.preventDefault()
    })

    render(
      <Form
        handleFormSubmit={handleFormSubmit}
        name=""
        select=""
        valor=""
        setName={jest.fn()}
        setSelect={jest.fn()}
        setValor={jest.fn()}
      />,
    )

    const fakeDados = {
      transacao: 'compra',
      nome: 'celular',
      valor: '1250',
    }

    userEvent.selectOptions(
      screen.getByRole('combobox', {
        name: /tipo de transação/i,
      }),
      fakeDados.transacao,
    )

    userEvent.type(
      screen.getByRole('textbox', { name: /nome da mercadoria/i }),
      fakeDados.nome,
    )

    userEvent.type(
      screen.getByRole('spinbutton', {
        name: /valor/i,
      }),
      fakeDados.valor,
    )

    fireEvent.submit(
      screen.getByRole('button', {
        name: /adicionar transação/i,
      }),
    )

    render(<Main />)

    await waitFor(() => {
      expect(screen.getByText('celular')).toBeInTheDocument()
    })
  })
})
