# Respuestas · Parte 3

Nombre y apellidos: Imanol Margarit Llopis

## 1. ¿Por qué el tablero se guarda como un array de columnas con las fichas de abajo a arriba? ¿Qué ventajas tiene para este juego?
Porque la nueva ficha debe de ir al final de la columna y la posicion es "columnaActual.length".
Que la altura de la columna y la comprobacion de llena sale de su longitud.

## 2. tablero.slice() hace una copia "superficial". ¿Por qué hay que crear también una columna nueva? ¿Qué pasaría si usaras push sobre la columna original?
Porque slice hace una copia del array pero las columnas son las mismas.
Que cambiaria tambien el tablero anterior del historial.

## 3. ¿Por qué cada columna es un botón? ¿Qué te ahorra el atributo disabled?
Porque la columna es la zona donde se pulsa.
El navegador ignora los clics cuando la partida ha acabado o la columna esta llena y no hace falta repetir esa comprobacion.

## 4. Explica cómo detecta tu calcularGanador un cuatro en línea. ¿Por qué no se escriben a mano todas las líneas como en el tres en raya?
Recorre cada ficha y mira las direcciones, comprobando si hay cuatro del mismo color.
Porque en 7 × 6 hay 69, y el bucle las cubre todas.
