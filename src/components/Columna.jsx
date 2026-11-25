import Ficha from "./Ficha"
import { FILAS } from '../utils/calcularGanador'

function Columna({ fichas, onElegir, desactivada, ganadoras = [] }) {
  const celdas = []
  for (let fila = FILAS - 1; fila >= 0; fila--) {
    celdas.push(<Ficha key={fila} valor={fichas[fila] ?? null} ganadora={ganadoras.includes(fila)}/>)
  }

  return (
    <button className="columna" onClick={onElegir} disabled={desactivada}>
      {celdas}
    </button>
  )
}

export default Columna
