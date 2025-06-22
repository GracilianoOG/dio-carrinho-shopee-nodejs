export const createItem = (name, price, quantity) => {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
  };
};
