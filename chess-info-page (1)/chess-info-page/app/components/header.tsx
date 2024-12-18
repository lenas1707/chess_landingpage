import { ChessIcon } from './chess-icon'

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ChessIcon className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Informações de Xadrez</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#básico" className="hover:text-gray-300">Básico</a></li>
            <li><a href="#peças" className="hover:text-gray-300">Peças</a></li>
            <li><a href="#tabuleiro" className="hover:text-gray-300">Tabuleiro</a></li>
            <li><a href="#matemática" className="hover:text-gray-300">Matemática</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

