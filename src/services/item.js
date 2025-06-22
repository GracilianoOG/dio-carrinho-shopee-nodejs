export const createItem = (name, price, quantity) => {
  return {
    name,
    price,
    quantity,
    subtotal() {
      return this.price * this.quantity;
    },
  };
};
