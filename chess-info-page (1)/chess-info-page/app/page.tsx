import { Header } from './components/header'
import { Chessboard } from './components/chessboard'
import { MathComponent } from './components/math-component'
import { ChessMatrix } from './components/chess-matrix'
import { NormalDistribution } from './components/normal-distribution'

export default function ChessInfoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section id="basics" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Chess Basics</h2>
          <p className="mb-4">
            Chess is a two-player strategy game played on a board with 64 squares arranged in an 8x8 grid. Each player starts with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns.
          </p>
          <p>
            The objective of the game is to checkmate the opponent's king, which means the king is in a position to be captured (in check) and there is no legal move to escape capture.
          </p>
        </section>

        <section id="pieces" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Chess Pieces</h2>
          <ul className="list-disc list-inside">
            <li>King: Moves one square in any direction</li>
            <li>Queen: Moves any number of squares in any direction</li>
            <li>Rook: Moves any number of squares horizontally or vertically</li>
            <li>Bishop: Moves any number of squares diagonally</li>
            <li>Knight: Moves in an "L" shape (two squares in one direction, then one square perpendicular)</li>
            <li>Pawn: Moves forward one square at a time, captures diagonally</li>
          </ul>
        </section>

        <section id="board" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Chessboard</h2>
          <p className="mb-4">
            The chessboard consists of 64 squares arranged in an 8x8 grid. The squares alternate between light and dark colors, typically white and black. Below is an interactive chessboard where you can click on squares to highlight them:
          </p>
          <div className="flex flex-col items-center">
            <Chessboard />
            <p className="mt-4 text-sm text-gray-600">Click on a square to highlight it. Click again to deselect.</p>
          </div>
        </section>

        <section id="math" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Chess Mathematics</h2>
          <p className="mb-4">
            Chess has many interesting mathematical properties and statistics. Here are some fascinating mathematical aspects of chess:
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Number of Possible Games</h3>
              <p>The number of possible unique chess games is estimated to be around:</p>
              <MathComponent equation="10^{120}" />
              <p className="text-sm text-gray-600">This number is known as the Shannon number.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Knight's Tour</h3>
              <p>The number of possible knight's tours on a standard 8x8 chessboard is:</p>
              <MathComponent equation="26,534,728,821,064" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Probability of Winning</h3>
              <p>In a game between two players of equal skill, the probability of winning for the player with white pieces is approximately:</p>
              <MathComponent equation="P(\text{White Wins}) \approx 0.55" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Elo Rating System</h3>
              <p>The expected score of a player is calculated using the following formula:</p>
              <MathComponent equation="E_A = \frac{1}{1 + 10^{(R_B - R_A) / 400}}" />
              <p className="text-sm text-gray-600">Where E_A is the expected score of player A, and R_A and R_B are the ratings of players A and B respectively.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Matrix Representation of a Chess Game</h3>
              <p className="mb-4">A chess game can be represented as an 8x8 matrix, where each cell contains a value representing a piece or an empty square. Here's an example of the initial board state:</p>
              <ChessMatrix />
              <p className="mt-4">In this representation:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Positive numbers represent white pieces</li>
                <li>Negative numbers represent black pieces</li>
                <li>0 represents an empty square</li>
                <li>The absolute values represent: 1 (Pawn), 2 (Knight), 3 (Bishop), 4 (Rook), 5 (Queen), 6 (King)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Normal Distribution of Chess Game Lengths</h3>
              <p className="mb-4">The number of moves in chess games typically follows a normal distribution. For example, in master-level games:</p>
              <NormalDistribution />
              <ul className="list-disc list-inside mt-2">
                <li>Mean (μ): Approximately 40 moves</li>
                <li>Standard Deviation (σ): About 10 moves</li>
              </ul>
              <p className="mt-2">This means that about 68% of master-level games last between 30 and 50 moves, and about 95% last between 20 and 60 moves.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

