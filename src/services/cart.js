const addItem = (userCart, item) => {
  userCart.push(item);
};

const deleteItem = (userCart, name) => {
  const index = userCart.findIndex(item => item.name === name);

  if (index !== -1) userCart.splice(index, 1);
};

const removeItem = (userCart, index) => {};

const calcTotalCart = userCart => {
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
};

export { addItem, deleteItem, removeItem, calcTotalCart };
