export function manejarClickPrevio(callback) {
    callback(-20); // le digo al main "andá 20 atrás"
}

export function manejarClickSiguiente(callback) {
    callback(+20); // le digo al main "andá 20 adelante"
}