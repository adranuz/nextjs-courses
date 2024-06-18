/**
 * Formats a given number into a currency format.
 *
 * @param {number} value - The number to be formatted.
 * @returns {string} The formatted currency string.
 *
 * @example
 * import { currencyFormat } from './currencyFormat';
 *
 * const value = 1234.56;
 * const formattedValue = currencyFormat(value);
 *
 * console.log(formattedValue); // Outputs: $1,234.56
 */
export const currencyFormat = (value: number) => {
	// esto es nativo de JS, no es necesario instalar nada
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(value);
};
