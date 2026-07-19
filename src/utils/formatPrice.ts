// виводить ціну у форматі "€8000", без копійок і роздільників тисяч
export function formatPrice(price: number): string {
  return `€${price}`;
}
