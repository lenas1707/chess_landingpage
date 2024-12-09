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
          <h2 className="text-2xl font-bold mb-4">O básico do xadrez</h2>
          <p className="mb-4">
            O xadrez é um jogo de estratégia para dois jogadores jogado em um tabuleiro com 64 quadrados dispostos em um tabuleiro de 8x8. Cada jogador começa com 16 peças: um rei, uma rainha, duas torres, dois cavalos, dois bispos e oito peões.
          </p>
          <p>
            O objetivo do jogo é dar xeque-mate no rei do adversário, o que significa que o rei está em posição de ser capturado (em xeque) e não há jogada legal para escapar da captura.
          </p>
        </section>

        <section id="pieces" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Peças do Xadrez</h2>
          <ul className="list-disc list-inside">
            <li>Rei: Move-se uma casa em qualquer direção</li>
            <li>Rainha: Move-se qualquer número de casas em qualquer direção</li>
            <li>Torre: Move-se qualquer número de casas na horizontal ou na vertical</li>
            <li>Bispo: Move-se qualquer número de casas na diagonal</li>
            <li>Cavalo: Move-se em “L” (dois quadrados em qualquer direção, depois um quadrado na perpendicular)</li>
            <li>Peão: Move-se uma casa por vez, captura na diagonal </li>
          </ul>
        </section>

        <section id="board" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Chessboard</h2>
          <p className="mb-4">
            O tabuleiro de xadrez consiste em 64 quadrados dispostos em uma grade de 8x8. Os quadrados alternam entre cores claras e escuras, geralmente branco e preto. Abaixo está um tabuleiro de xadrez interativo no qual você pode clicar nos quadrados para destacá-los:
          </p>
          <div className="flex flex-col items-center">
            <Chessboard />
            <p className="mt-4 text-sm text-gray-600">Clique no quadrado para destaca-lo. Clique novamente para cancelar o destaque</p>
          </div>
        </section>

        <section id="math" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Matemática do Xadrez</h2>
          <p className="mb-4">
            O xadrez tem muitas propriedades matemáticas e estatísticas interessantes. Aqui estão alguns aspectos matemáticos interessantes do xadrez:
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Número de jogos possíveis</h3>
              <p>O número de possíveis jogos de xadrez únicos é estimado em cerca de:</p>
              <MathComponent equation="10^{120}" />
              <p className="text-sm text-gray-600">Esse número é conhecido como Shannon Number. Existem outras estimativas, mas Shannon desenvolveu a mais famosa.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Movimentos do Cavalo</h3>
              <p>O número de possíveis movimentos do cavalo em um tabuleiro de xadrez padrão 8x8 é:</p>
              <MathComponent equation="26.534.728.821.064" />
              <p className="text-sm text-gray-600">Euler iniciou o estudos sobre a quantidade de movimentos que um cavalo pode executar em uma partida de xadrez.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Probabilidade de vitória</h3>
              <p>Dado um jogo entre dois jogadores de igual habilidade, a chance das peças brancas ganharem é:</p>
              <MathComponent equation="P(\text{White Wins}) \approx 0.55" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Sistema de Ranqueamento de Xadrez</h3>
              <p>A pontuação de um jogador é calculada pela seguinte formula:</p>
              <MathComponent equation="E_A = \frac{1}{1 + 10^{(R_B - R_A) / 400}}" />
              <p className="text-sm text-gray-600">Onde E_A é a pontuação esperada do jogador A, R_A e R_B são as classificações dos jogadores A e B respectivamente.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Representação Matricial do Xadrez</h3>
              <p className="mb-4">Um jogo de xadrez pode ser representado como uma matriz 8x8, em que cada célula contém um valor que representa uma peça ou um quadrado vazio. Abaixo temos um exemplo do estado inicial do tabuleiro:</p>
              <ChessMatrix />
              <p className="mt-4">Nessa representação:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Números positivos representam as peças brancas</li>
                <li>Números negativos representam as peças</li>
                <li>0 representa os quadrados vazios</li>
                <li>Os valores absolutos representam: 1 (Peão), 2 (Cavalo), 3 (Bispo), 4 (Torre), 5 (Rainha), 6 (Rei)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Distribuição Normal da duração de um jogo de xadrez</h3>
              <p className="mb-4">O número de movimentos de um jogo de xadrez respeita a distribuição normal. Por exemplo, em jogos de alto nível:</p>
              <NormalDistribution />
              <ul className="list-disc list-inside mt-2">
                <li>Média (μ): Aproximadamente 40 movimentos</li>
                <li>Desvio padrão (σ): Cerca de 10 movimentos</li>
              </ul>
              <p className="mt-2">Isso significa que cerca de 68% dos jogos de nível mestre duram entre 30 e 50 movimentos, e cerca de 95% duram entre 20 e 60 movimentos.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

