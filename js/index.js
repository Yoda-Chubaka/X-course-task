import booksData from '../data/books.json' assert { type: "json" };


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
function renderBooks() {
    booksData.books.forEach(book => {
       
    });
}
renderBooks();


const container = document.querySelector('.books-list');
        booksData.books.forEach(book => {
          const bookElement = document.createElement('li');
          console.log(book);
          console.log(bookElement);
            bookElement.innerHTML = `
                <li class="one-book" id=${book.id}>
                  <a href="./specific-book.html">
                    <div class="books-items">
                      <img src="${book.image}" width="150" alt="${book.title}" />
                      <div>
                        <h4 class="header-name-box">${book.title}</h4>
                          <p class="header-name-box author">${book.author}</p>
                      </div>
                    </div>
                  </a>
                  <div class="books-price">
                    <h4 header-name-box author>${book.price}</h4>
                    <a href="./specific-book.html" class="link-button">View</a>
                  </div>
                </li>
            `;
            container.appendChild(bookElement);
        });















