// TODO: importa Columna, Ficha, calcularGanador, tableroLleno y FILAS
import Columna from "./Columna"
import Ficha from './Ficha'
import { FILAS } from '../utils/calcularGanador'

function Tablero({turno, tablero, onJugar }) {
  // TODO (paso 4): resultado, empate y partida terminada

  const nombreTurno = turno === 'R' ? 'Rojo' : 'Amarillo'
  
  function elegirColumna(col) {
    const columnaActual = tablero[col]
    if (columnaActual.length >= FILAS) {
      return
    }

    const copia = tablero.slice()
    copia[col] = [...columnaActual, turno]
    onJugar(copia)
  }

  // TODO (paso 4): "Ganador: (ficha) Amarillo" o "Empate"

  return (
    <>
      <div className="estado">Turno de: <Ficha valor={turno} mini /> {nombreTurno}</div>
      <div className="tablero">
        {tablero.map((fichas, col) => (
          <Columna key={col} fichas={fichas} onElegir={() => elegirColumna(col)} desactivada={fichas.length >= FILAS} />
        ))}
      </div>
    </>
  )
}

export default Tablero
