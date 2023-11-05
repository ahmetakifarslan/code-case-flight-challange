export function formatPrice(price: number) {
  return new Intl.NumberFormat("tr-TR").format(price);
}
