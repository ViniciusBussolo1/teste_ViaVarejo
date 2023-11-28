import { Dispatch, SetStateAction } from 'react'

interface FormProps {
  handleFormSubmit: () => void
  select: string
  name: string
  valor: string
  setSelect: Dispatch<SetStateAction<string>>
  setName: Dispatch<SetStateAction<string>>
  setValor: Dispatch<SetStateAction<string>>
}

export function Form({
  handleFormSubmit,
  name,
  select,
  setName,
  setSelect,
  setValor,
  valor,
}: FormProps) {
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full flex flex-col justify-center items-center gap-5 mt-[1.313rem] "
    >
      <div className="max-w-[23.125rem] w-full space-y-1">
        <label
          htmlFor="transacao"
          className="text-sm leading-[1.375rem] text-gray-800"
        >
          Tipo de transação
        </label>
        <select
          name="transacao"
          id="transacao"
          className="w-full border-[0.063rem] border-gray-500 rounded py-2 px-[0.625rem] text-sm leading-[1.375rem] text-gray-600"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="">Selecione uma transação...</option>
          <option value="compra">Compra</option>
          <option value="venda">Venda</option>
        </select>
      </div>
      <div className="max-w-[23.125rem] w-full space-y-1">
        <label
          htmlFor="name"
          className="text-sm leading-[1.375rem] text-gray-800"
        >
          Nome da mercadoria
        </label>
        <input
          type="text"
          id="name"
          placeholder="Informe o nome da mercadoria"
          className="w-full border-[0.063rem] border-gray-500 rounded py-2 px-[0.625rem] text-sm leading-[1.375rem] text-gray-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="max-w-[23.125rem] w-full space-y-1">
        <label
          htmlFor="valor"
          className="text-sm leading-[1.375rem] text-gray-800"
        >
          Valor
        </label>
        <input
          type="number"
          id="valor"
          placeholder="Informe somente numeros"
          className="w-full border-[0.063rem] border-gray-500 rounded py-2 px-[0.625rem] text-sm leading-[1.375rem] text-gray-600"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 rounded py-2 text-sm leading-[1.375rem] text-white"
      >
        Adicionar transação
      </button>
    </form>
  )
}
