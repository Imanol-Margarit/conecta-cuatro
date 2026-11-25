// TODO: importa Columna, Ficha, calcularGanador, tableroLleno y FILAS
import Columna from "./Columna"
import Ficha from './Ficha'
import {calcularGanador, tableroLleno, FILAS } from '../utils/calcularGanador'

function nombreColor(color) {
  return color === 'R' ? 'Rojo' : 'Amarillo'
}

function Tablero({turno, tablero, onJugar }) {
  const resultado = calcularGanador(tablero)
  const empate = !resultado && tableroLleno(tablero)
  const terminada = resultado !== null || empate
  const ganadoras = resultado ? resultado.linea : []

  function elegirColumna(col) {
    const columnaActual = tablero[col]
    if (columnaActual.length >= FILAS) {
      return
    }

    const copia = tablero.slice()
    copia[col] = [...columnaActual, turno]
    onJugar(copia)
  }

  let estado
  if (resultado) {
    estado = (
      <>
        Ganador: <Ficha valor={resultado.ganador} mini /> {nombreColor(resultado.ganador)}
      </>
    )
  } else if (empate) {
    estado = 'Empate'
  } else {
    estado = (
      <>
        Turno de: <Ficha valor={turno} mini /> {nombreColor(turno)}
      </>
    )
  }

  return (
    <>
      <div className="estado">{estado}</div>
      <div className="tablero">
        {tablero.map((fichas, col) => {
          const filasGanadoras = ganadoras
            .filter(([c]) => c === col)
            .map(([, f]) => f)

          return (
            <Columna
              key={col}
              fichas={fichas}
              onElegir={() => elegirColumna(col)}
              desactivada={terminada || fichas.length >= FILAS}
              ganadoras={filasGanadoras}
            />
          )
        })}
      </div>
    </>
  )
}

export default Tablero
