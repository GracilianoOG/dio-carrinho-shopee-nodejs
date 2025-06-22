const addItem = (userCart, item) => {
  userCart.push(item);
};

const deleteItem = (userCart, name) => {
  const index = userCart.findIndex(item => item.name === name);

  if (index !== -1) userCart.splice(index, 1);
};

const removeItem = (userCart, name) => {
  const index = userCart.findIndex(item => item.name === name);
  const item = userCart[index];

  if (item.quantity > 1) {
    item.quantity--;
  } else {
    deleteItem(userCart, name);
  }
};

const calcTotalCart = userCart => {
  return userCart.reduce((total, item) => total + item.subtotal(), 0);
};

const displayCart = userCart => {
  console.log("Shopee Cart List:\n");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name}\tR$ ${item.price}\tx${
        item.quantity
      }\tSubtotal: R$ ${item.subtotal()}`
    );
  });
  console.log("");
};

export { addItem, deleteItem, removeItem, calcTotalCart, displayCart };
