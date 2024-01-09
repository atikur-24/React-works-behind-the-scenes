// catch DOM elements
const button = document.getElementById("button");
const price = document.getElementById("price");
const total = document.getElementById("total");

// state or data
const productPrice = 5000;
let totalPrice = 0;

// set product price initially
price.innerText = `৳ ${productPrice}`;
total.innerText = `Total: ৳ ${totalPrice}`;

button.addEventListener("click", () => {
  totalPrice += productPrice;
  total.innerText = `Total: ৳ ${totalPrice}`;
});
