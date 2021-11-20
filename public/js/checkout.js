// const del = document.querySelectorAll('delete');
// const addBtn = document.querySelectorAll('addToCart');
// const checkout = document.querySelectorAll('checkout');
// const button = document.querySelectorAll('btn');
// let id = button.getAttribute('data-id');

// for (var i = 0; i < addItem.length; i++) {
//   console.log(addItem[i]);
// }

// catalogInfo = require('');
// const { Catalog } = require('../../models');

let cart = [];
let trainerArr = [];

// function addToCart(clicked_id) {
//   clicked_id = parseInt(clicked_id);
//   cart.push(clicked_id);
//   console.log(cart);
// }

// console.log(addToCart);

let cart = [];
let trainerArr = [];

function addToCart(clicked_id) {
  clicked_id = parseInt(clicked_id);
  cart.push(clicked_id);
  console.log(cart);
}

console.log(cart);

cart.forEach(() => {
  let cardEl = document.querySelector('.checkout-card');
  checkoutCard.innerHTML +
    `<div id="checkout-card" class="item-card card text-center" style="width: 18rem">
    <img class="card-img-top col mx-auto" src="{{{sprites}}}" alt="Card image cap" />
    <div class="card-body">
        <h5 class="card-title">Item: {{name}}</h5>
        <p class="card-text ">Type: {{types}}</p>
        <p class="card-text">Price: {{price}}</p>
        <p class="card-text">${cardEl[0]}</p>`;
});
