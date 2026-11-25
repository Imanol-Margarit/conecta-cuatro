import { useState } from 'react'
import Tablero from './Tablero'
import { COLUMNAS } from '../utils/calcularGanador'

const TABLERO_VACIO = Array.from({ length: COLUMNAS }, () => [])

function Partida() {
  const [historial, setHistorial] = useState([TABLERO_VACIO])
  const [movimientoActual, setMovimientoActual] = useState(0)

  const tableroActual = historial[movimientoActual]
  const turno = movimientoActual % 2 === 0 ? 'R' : 'A'

  function jugar(nuevoTablero) {
    const nuevoHistorial = [
      ...historial.slice(0, movimientoActual + 1),
      nuevoTablero,
    ]
    setHistorial(nuevoHistorial)
    setMovimientoActual(nuevoHistorial.length - 1)
  }

  function irAMovimiento(move) {
    setMovimientoActual(move)
  }

  const movimientos = historial.map((tablero, move) => {
    if (move === 0) {
      return (
        <li key={move}>
          <button onClick={() => irAMovimiento(0)}>
            Ir al inicio de la partida
          </button>
        </li>
      )
    }

    const anterior = historial[move - 1]
    const columna =
      tablero.findIndex((fichas, col) => fichas.length !== anterior[col].length) + 1

    return (
      <li key={move}>
        <button onClick={() => irAMovimiento(move)}>
          {'Ir al movimiento #' + move + ' (columna ' + columna + ')'}
        </button>
      </li>
    )
  })

  return (
    <div className="partida">
      <div>
        <Tablero turno={turno} tablero={tableroActual} onJugar={jugar} />
      </div>
      <div className="historial">
        <ol>{movimientos}</ol>
      </div>
    </div>
  )
}

export default Partida