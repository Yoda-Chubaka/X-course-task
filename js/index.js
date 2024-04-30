// MOBILE MENU
(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();



// BUTTON MINUS
var value = document.getElementById('book-quantity');
var price = 100;
var value1 = document.getElementById('total-price');


function buttonMinus() {
  value.stepDown();
  var value3 = price * value.value-price;
  console.log("MINUS BUTTON:", value3);
  value1.innerHTML = value3;
}

// BUTTON PLUS
function buttonPlus() {
  value.stepUp();
  var value2 = price *value.value;
  console.log("PLUS BUTTON:", value2);
  value1.innerHTML = value2;
}

// // TOTAP PRICE
// function totalPrice() {
//   console.log("jhgfdf")
//   value1.stepUp()
// }

