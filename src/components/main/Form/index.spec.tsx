import { Form } from './Form'
import { describe } from 'node:test'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'

const handleFormSubmit = jest.fn()
describe('Test Form', () => {
  it('deve rendelizar o form corretamente', () => {
    render(
      <Form
        handleFormSubmit={jest.fn()}
        name=""
        select=""
        valor=""
        setName={jest.fn()}
        setSelect={jest.fn()}
        setValor={jest.fn()}
      />,
    )

    expect(screen.getByLabelText(/tipo de transação/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/nome da mercadoria/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/valor/i)).toBeInTheDocument()
  })

  it('deve fazer o submit do form corretamente', async () => {
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

    expect(handleFormSubmit).toHaveBeenCalledTimes(1)
  })
})
