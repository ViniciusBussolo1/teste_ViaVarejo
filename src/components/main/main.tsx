'use client'

import { useState } from 'react'
import { Form } from './Form/Form'

interface ItemsTableProps {
  select: string
  name: string
  valor: string
  total: number
}

export function Main() {
  const [select, setSelect] = useState('')
  const [name, setName] = useState('')
  const [valor, setValor] = useState('')
  const [total, setTotal] = useState(0)

  const [itemsTable, setItemsTable] = useState<Array<ItemsTableProps>>([])

  const handleFormSubmit = () => {
    event?.preventDefault()

    if (select === 'compra') {
      setTotal(total + parseFloat(valor))
    } else {
      setTotal((total) => total - parseFloat(valor))
    }

    setItemsTable([...itemsTable, { select, name, valor, total }])
  }

  const formatarValorMonetario = (valor: string) => {
    const novoValor = parseFloat(valor)

    const valorFormatado = novoValor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return valorFormatado
  }

  const formatarValorMonetarioTotal = () => {
    const valor = total.toString()
    const novoValor = parseFloat(valor)

    const valorFormatado = novoValor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return valorFormatado
  }

  return (
    <main className="w-full flex justify-center">
      <div className="max-w-[68.75rem] w-full pt-8 flex gap-5">
        <div className="max-w-[25rem] w-full flex flex-col justify-center items-center border-[0.063rem] border-gray-500 rounded px-4 py-5">
          <h1 className="text-lg leading-[1.375rem] font-bold text-black">
            Nova transação
          </h1>
          <Form
            handleFormSubmit={handleFormSubmit}
            loading={false}
            name={name}
            select={select}
            valor={valor}
            setName={setName}
            setSelect={setSelect}
            setValor={setValor}
          />
        </div>

        <div className="max-w-[42.5rem] w-full flex flex-col items-center gap-5 py-5">
          <h1 className="text-lg leading-[1.375rem] font-bold text-black">
            Extrato de transações
          </h1>
          <table className="w-full border-spacing-y-4">
            <thead>
              <tr className="border-b border-gray-500">
                <th></th>
                <th className="text-start text-sm leading-[1.375rem] font-bold text-black">
                  Mercadoria
                </th>
                <th className="text-end text-sm leading-[1.375rem] font-bold text-black">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody>
              {itemsTable.map((item, index) => {
                return (
                  <tr key={index} className="border-b border-gray-500">
                    <td className="text-sm leading-[1rem] text-black">
                      {item.select === 'compra' ? '+' : '-'}
                    </td>
                    <td className="text-sm leading-[1rem] text-black">
                      {item.name}
                    </td>
                    <td className="text-end text-sm leading-[1.375rem] text-black">
                      {formatarValorMonetario(item.valor)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-500">
                <th></th>
                <th className="text-start text-sm font-bold leading-[1rem] text-black">
                  Total
                </th>
                <th className="text-end">
                  <div className="flex flex-col">
                    <span className="text-sm leading-[1.375rem] text-black font-bold">
                      {formatarValorMonetarioTotal()}
                    </span>
                    <span className="text-[0.625rem] leading-[1.375rem] text-black">
                      {total < 0 ? '[PREJUIZO]' : '[LUCRO]'}
                    </span>
                  </div>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </main>
  )
}
