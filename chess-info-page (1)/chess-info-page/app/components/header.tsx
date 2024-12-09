import { ChessIcon } from './chess-icon'

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ChessIcon className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Chess Info</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#basics" className="hover:text-gray-300">Basics</a></li>
            <li><a href="#pieces" className="hover:text-gray-300">Pieces</a></li>
            <li><a href="#board" className="hover:text-gray-300">Board</a></li>
            <li><a href="#math" className="hover:text-gray-300">Math</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

