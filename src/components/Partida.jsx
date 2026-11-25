// TODO: importa useState, Tablero y COLUMNAS
import Tablero from './Tablero'
import { useState } from 'react'
import { COLUMNAS } from '../utils/calcularGanador'

const TABLERO_VACIO = Array.from({ length: COLUMNAS }, () => [])
// Componente principal: historial y turnos (igual que Game en la parte 1).
function Partida() {
  const [historial] = useState([TABLERO_VACIO])
  const tableroActual = historial[historial.length - 1]
  // TODO (paso 3): estado movimientoActual -> 0

  // TODO (paso 3): valores derivados turno ('R' en movimientos pares) y tableroActual

  function jugar(nuevoTablero) {
    setHistorial([...historial, nuevoTablero])
  }
  // TODO (paso 5): lista de movimientos "Ir al movimiento #N (columna C)"

  return (
    <div className="partida">
      <div>
        <Tablero tablero={tableroActual} onJugar={jugar}/>
      </div>
      <div className="historial">{/* TODO (paso 5): <ol> con los movimientos */}</div>
    </div>
  )
}

export default Partida
