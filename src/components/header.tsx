import Image from 'next/image'
import Logo from '../../public/Logo.svg'

export function Header() {
  return (
    <header className="w-full h-20 bg-gray-100 flex justify-center px-2">
      <div className="h-full max-w-[68.75rem] w-full flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Image src={Logo} alt="Logo" />
          <h1 className="text-xl leading-normal font-semibold text-gray-800">
            Controle financeiro
          </h1>
        </div>
        <nav className="h-10 max-w-[21.875rem] w-full bg-white">
          <ul className="h-full w-full flex items-center justify-center gap-5">
            <li className="text-base leading-normal font-semibold text-gray-800 hover:text-gray-900 cursor-pointer">
              Dashboard
            </li>
            <div className="w-[0.063rem] h-5 bg-gray-500"></div>
            <li className="text-base leading-normal font-semibold text-gray-800 hover:text-gray-900 cursor-pointer">
              Resumo
            </li>
            <div className="w-[0.063rem] h-5 bg-gray-500"></div>
            <li className="text-base leading-normal font-semibold text-gray-800 hover:text-gray-900 cursor-pointer">
              Configurações
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
