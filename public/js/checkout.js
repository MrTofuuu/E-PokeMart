// const del = document.querySelectorAll('delete');
// const addBtn = document.querySelectorAll('addToCart');
// const checkout = document.querySelectorAll('checkout');
// const button = document.querySelectorAll('btn');
// let id = button.getAttribute('data-id');

// for (var i = 0; i < addItem.length; i++) {
//   console.log(addItem[i]);
// }

let cart = [];
let trainerArr = [];

function addToCart(clicked_id) {
  clicked_id = parseInt(clicked_id);
  cart.push(clicked_id);
  console.log(cart);
}

// function addCartArr() {
//   checkoutArr.push();
// }

// del.innerHTML = deleteArr;

// function deleteArr() {
//   checkoutArr.splice();
// }

// checkout.innerHTML = checkoutArr;

// function checkoutArr() {
//   trainerArr.push();
// }

// button.addEventListener('click', function (event) {
//   event.preventDefault();
//   cart.push(id);
// });
