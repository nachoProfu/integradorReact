export const filterProductsByCategory = (products, category) => {
  if (category && category != "Todos") {
    return { [category]: products[category] };
  }
  return products;
};
