var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 //we create an empty object
 var price = Math.floor(Math.random() * 99 + 1);
 var itemsObject = {};
 intemsObject[item] = price;
 cart.push(intemsObject);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  for (let i=0; i < cart.length; i++) {
    if (cart.length === 0) {
      console.log("Your shopping cart is empty.");
    } else {

    }
  }
}

function total() {
  // write your code here
  for (let i=0; i < cart.length; i++) {

  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
