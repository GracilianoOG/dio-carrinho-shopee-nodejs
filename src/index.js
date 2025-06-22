import * as cartService from "./services/cart.js";
import { createItem } from "./services/item.js";

const cart = [];

// Create five items
const item1 = createItem("Mouse", 20.0, 4);
const item2 = createItem("Teclado", 50.0, 1);
const item3 = createItem("Monitor", 350.0, 2);
const item4 = createItem("I7 2600", 100.0, 5);
const item5 = createItem("RX 580", 200.0, 3);

cartService.addItemToCart(cart, item1);
cartService.addItemToCart(cart, item2);
cartService.addItemToCart(cart, item3);
cartService.addItemToCart(cart, item4);
cartService.addItemToCart(cart, item5);

// Remove two units of Mouse
cartService.removeItem(cart, "Mouse");
cartService.removeItem(cart, "Mouse");

// Add one unit of Mouse
cartService.addNewItem(cart, "Mouse");

cartService.displayCart(cart);
console.log("Total: R$ " + cartService.calcTotalCart(cart).toFixed(2));
