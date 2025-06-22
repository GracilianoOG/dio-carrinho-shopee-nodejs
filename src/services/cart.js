const addItem = (userCart, item) => {
  userCart.push(item);
};

const deleteItem = (userCart, name) => {};

const removeItem = (userCart, index) => {};

const calcTotalCart = userCart => {
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
};
