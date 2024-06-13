export const currencyFormat = (value: number) => {
  // esto es nativo de JS, no es necesario instalar nada
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}
