


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

// BOOKS.JSON

import data from "/data/books.json" assert { type: "json" };
console.log(data);
    
const parsedData = JSON.stringify(data);
console.log(parsedData);

const valueJSON = Object.values(data);
console.log(valueJSON);


// const qwerty = valueJSON.map(({ id, author, price, image, title, level, tags, amount, shortDescription, description }) =>
//     `
//     <li class="one-book">
//       <a href="./specific-book.html">
//         <div class="books-items">
//           <img src="${image}" width="150" alt="book" />
//             <div>
//               <h4 class="header-name-box">${title}</h4>
//                 <p class="header-name-box author">${author}</p>
//                   </div>
//         </div>
//       </a>
//       <div class="books-price">
//         <h4 header-name-box author>${price}</h4>
//         <a href="./specific-book.html" class="link-button">View</a>
//       </div>
//     </li>
//     `
//   )

// Другий варіант роботи з JSON через innerHTML
let list = document.querySelector(".books-list");

const bookList = valueJSON.map(({ id, author, price, image, title, level, tags, amount, shortDescription, description }) =>
  list.innerHTML += `
    <li class="one-book" id=${id}>
      <a href="./specific-book.html">
        <div class="books-items">
          <img src="${image}" width="150" alt="book" />
            <div>
              <h4 class="header-name-box">${title}</h4>
                <p class="header-name-box author">${author}</p>
                  </div>
        </div>
      </a>
      <div class="books-price">
        <h4 header-name-box author>${price}</h4>
        <a href="./specific-book.html" class="link-button">View</a>
      </div>
    </li>
  `
);
console.log(bookList)















