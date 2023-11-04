export function applyDiscount(data, discountRate) {
  // flights dizisini dön
  const updatedFlights = data.map((flight) => {
    // fareCategories nesnesini dön
    const updatedFareCategories = { ...flight.fareCategories };

    for (const category in updatedFareCategories) {
      // Her kategori altındaki subcategories dizisini dön
      const updatedSubcategories = updatedFareCategories[
        category
      ].subcategories.map((subcategory) => {
        // brandCode'u 'ecoFly' olanı bul
        if (subcategory.brandCode === "ecoFly") {
          // price nesnesini kopyala ve indirimi uygula
          const updatedPrice = {
            ...subcategory.price,
            amount: subcategory.price.amount * (1 - discountRate),
          };
          return { ...subcategory, price: updatedPrice };
        }
        return subcategory;
      });

      updatedFareCategories[category].subcategories = updatedSubcategories;
    }

    return { ...flight, fareCategories: updatedFareCategories };
  });

  return { ...data, flights: updatedFlights };
}
