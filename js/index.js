// import data from "/data/books.json" assert { type: "json" };


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
const value = document.getElementById('book-quantity');
const price = 100;
const value1 = document.getElementById('total-price');

function buttonMinus() {
  value.stepDown();
  const value3 = price * value.value;
  value1.innerHTML = value3; 
}

// BUTTON PLUS
function buttonPlus() {
  value.stepUp();
  const value2 = price *value.value;
  value1.innerHTML = value2;
}

// INPUT ENTER QUANTITY
function inputEnterQuantity() {
  const quantityInput = document.getElementById("book-quantity").value;
  document.addEventListener( 'keyup', event => {
    if (event.code === 'Enter') {
      const value2 = price * value.value;
      value1.innerHTML = value2;
    } if (!(quantityInput >= 1) || quantityInput === "e" || quantityInput === "," || quantityInput >= 43) {
      value1.innerHTML = 0;
    }
});
}

// BOOK QUANTITY VALIDATION
function quantityValidate(value) {
  const quantityInput = document.getElementById("book-quantity").value;
  
  if (!(quantityInput >= 1) || quantityInput === "e" || quantityInput === "," || quantityInput >= 43) {
    const divQuantity = document.getElementById("for-notification");
    divQuantity.innerHTML = "<p>You should enter correct quantity</p>";
  } if ((quantityInput >= 1) || quantityInput === "e" || quantityInput === "," || quantityInput === 1 || quantityInput >= 43 ) {
    const divQuantity = document.getElementById("for-notification");
    divQuantity.innerHTML = "<p></p>";
  } if (quantityInput >= 43) {
    const divQuantity = document.getElementById("for-notification");
    divQuantity.innerHTML = "<p>You should enter correct quantity</p>";
  }
}  

// JSON
const readJSON = fetch('./data/books.json')
    .then((response) => response.json())
  .then((json) => console.log(json));
    
const parsedData = JSON.parse(readJSON);
console.log(parsedData.author);

// const bookList = .map(({ id, author, price, image, title, level, tags, amount, shortDescription, description }) => {
//   `<ul>
//     <li>author: ${id}</li>
//     <li>author: ${author}</li>
//     <li>author: ${price}</li>
//     <li>author: ${image}</li>
//     <li>author: ${title}</li>
//     <li>author: ${level}</li>
//     <li>author: ${tags}</li>
//     <li>author: ${amount}</li>
//     <li>author: ${shortDescription}</li>
//     <li>author: ${description}</li>
//   </ul>`
// }
// );












