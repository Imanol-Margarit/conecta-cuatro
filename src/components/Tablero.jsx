// TODO: importa Columna, Ficha, calcularGanador, tableroLleno y FILAS
import Columna from "./Columna"
import { FILAS } from '../utils/calcularGanador'
// Componente: el tablero azul con 7 columnas y el texto de estado.
// Props:
//   turno   -> 'R' o 'A' (paso 3)
//   tablero -> array de 7 columnas (paso 1)
//   onJugar -> función que recibe el tablero nuevo (paso 2)
function Tablero({ tablero, onJugar }) {
  // TODO (paso 4): resultado, empate y partida terminada

  const turno = 'R'
  
  function elegirColumna(col) {
    const columnaActual = tablero[col]
    if (columnaActual.length >= FILAS) {
      return
    }

    const copia = tablero.slice()
    copia[col] = [...columnaActual, turno]
    onJugar(copia)
  }
  // TODO (paso 3): texto de estado con una ficha mini del color del turno
  //   "Turno de: (ficha) Rojo"
  // TODO (paso 4): "Ganador: (ficha) Amarillo" o "Empate"

  return (
    <>
      <div className="estado">{/* TODO (paso 3) */}</div>
      <div className="tablero">
        {tablero.map((fichas, col) => (
          <Columna key={col} fichas={fichas} onElegir={() => elegirColumna(col)} desactivada={fichas.length >= FILAS} />
        ))}
      </div>
    </>
  )
}

export default Tablero
