
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




// // BUTTON MINUS
// const bookQuantity = document.getElementById('book-quantity');
// let bookPrice = document.getElementById('price-id');
// const bookTotalPrice = document.getElementById('total-price');
// // let bookPriceInt = parseInt(bookTotalPrice.textContent);
// // console.log(bookPriceInt);

// function buttonMinus() {
//   bookQuantity.stepDown();
//   const value3 = bookPrice * bookQuantity.value;
//   console.log(value3)
//   bookTotalPrice.textContent = value3;
// }

// // BUTTON PLUS
// function buttonPlus() {
//   bookQuantity.stepUp();
//   const value2 = bookPrice *bookQuantity.value;
//   console.log(value2)
//   bookTotalPrice.textContent = value2;
// }

// // INPUT ENTER QUANTITY
// function inputEnterQuantity() {
//   const quantityInput = document.getElementById("book-quantity").value;
//   document.addEventListener( 'keyup', event => {
//     if (event.code === 'Enter') {
//       const value2 = bookPrice * bookQuantity.value;
//       totalPrice.textContent = value2;
//     } if (!(quantityInput >= 1) || quantityInput === "e" || quantityInput === "," || quantityInput >= 43) {
//       totalPrice.innerHTML = 0;
//     }
// });
// }

// // BOOK QUANTITY VALIDATION
// function quantityValidate(value) {
//   const quantityInput = document.getElementById("book-quantity").value;
  
//   if (!(quantityInput >= 1) || quantityInput === "e" || quantityInput === "," || quantityInput >= 43) {
//     const divQuantity = document.getElementById("for-notification");
//     divQuantity.innerHTML = "<p>You should enter correct quantity</p>";
//   } if ((quantityInput >= 1) || quantityInput === "e" || quantityInput === "," || quantityInput === 1 || quantityInput >= 43 ) {
//     const divQuantity = document.getElementById("for-notification");
//     divQuantity.innerHTML = "<p></p>";
//   } if (quantityInput >= 43) {
//     const divQuantity = document.getElementById("for-notification");
//     divQuantity.innerHTML = "<p>You should enter correct quantity</p>";
//   }
// }


// 	function filterBooksByPrice(priceRange) {
// 		if (priceRange === 'all') {
// 			return books;
// 		} else if (priceRange === '15') {
// 			return books.filter(book => book.price <= 15);
// 		} else if (priceRange === '15-30') {
// 			return books.filter(book => book.price > 15 && book.price <= 30);
// 		} else if (priceRange === '30') {
// 			return books.filter(book => book.price > 30);
// 		}
// }


// // INPUT ENTER QUANTITY
// function inputEnterQuantity() {
//   const quantityInput = document.getElementById("book-quantity").value;
//   document.addEventListener( 'keyup', event => {
//     if (event.code === 'Enter') {
//       const value2 = bookPrice * bookQuantity.value;
//       totalPrice.textContent = value2;
//     }
//     if (!(quantityInput >= 1) || quantityInput === "e" || quantityInput === "," || quantityInput >= 43) {
//       totalPrice.textContent = 0;
//     }
// });
// }

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

























