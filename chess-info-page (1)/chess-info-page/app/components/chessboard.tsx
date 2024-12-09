'use client'

import { useState } from 'react'

export function Chessboard() {
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null)

  const handleSquareClick = (square: string) => {
    setSelectedSquare(square === selectedSquare ? null : square)
  }

  const renderSquare = (row: number, col: number) => {
    const isBlack = (row + col) % 2 === 1
    const square = `${String.fromCharCode(97 + col)}${8 - row}`
    const isSelected = square === selectedSquare

    return (
      <div
        key={`${row}-${col}`}
        className={`w-12 h-12 flex items-center justify-center text-sm
          ${isBlack ? 'bg-gray-700' : 'bg-gray-200'}
          ${isSelected ? 'ring-2 ring-blue-500 ring-inset' : ''}
        `}
        onClick={() => handleSquareClick(square)}
      >
        {square}
      </div>
    )
  }

  return (
    <div className="inline-block border-2 border-gray-800">
      {[...Array(8)].map((_, row) => (
        <div key={row} className="flex">
          {[...Array(8)].map((_, col) => renderSquare(row, col))}
        </div>
      ))}
    </div>
  )
}

