import { Form } from './Form'
import { describe } from 'node:test'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'

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

  it.only('deve fazer o submit do form corretamente', async () => {
    const handleFormSubmit = jest.fn()
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

    userEvent.click(
      screen.getByRole('button', {
        name: /adicionar transação/i,
      }),
    )

    await waitFor(() => {
      expect(handleFormSubmit).toHaveBeenCalled()
    })
  })
})
