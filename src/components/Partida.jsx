import Tablero from './Tablero'
import { useState } from 'react'
import { COLUMNAS } from '../utils/calcularGanador'

const TABLERO_VACIO = Array.from({ length: COLUMNAS }, () => [])
// Componente principal: historial y turnos (igual que Game en la parte 1).
function Partida() {
  const [historial, setHistorial] = useState([TABLERO_VACIO])
  const [movimientoActual, setMovimientoActual] = useState(0)

  const tableroActual = historial[historial.length - 1]
  const turno = movimientoActual % 2 === 0 ? 'R' : 'A'

  function jugar(nuevoTablero) {
    setHistorial([...historial, nuevoTablero])
    setMovimientoActual(movimientoActual + 1)
  }
  // TODO (paso 5): lista de movimientos "Ir al movimiento #N (columna C)"

  return (
    <div className="partida">
      <div>
        <Tablero turno={turno} tablero={tableroActual} onJugar={jugar}/>
      </div>
      <div className="historial">{/* TODO (paso 5): <ol> con los movimientos */}</div>
    </div>
  )
}

export default Partida
