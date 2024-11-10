/**
 * Formatea un número como una cadena con separadores de miles y prefijo de peso ($).
 *
 * @param {number} number - El número a formatear.
 * @returns {string} El número formateado con separadores de miles y prefijo de peso.
 */
function formatCurrency(number) {
	// Convierte el número a una cadena y divide en partes de enteros y decimales
	const parts = number.toFixed(0).split('.');

	// Formatea la parte de los enteros con separadores de miles
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "'");

	// Retorna el número formateado con prefijo de peso
	return `$${parts.join(',')}`;
}

module.exports = {
	formatCurrency,
};
