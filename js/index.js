


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

// import data from "/data/books.json" assert { type: "json" };
// console.log(data);
    
// const parsedData = JSON.stringify(data);
// console.log(parsedData);

// const valueJSON = Object.values(data);
// console.log(valueJSON);


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
// let list = document.querySelector(".books-list");

// const bookList = valueJSON.map(({ id, author, price, image, title, level, tags, amount, shortDescription, description }) =>
//   list.innerHTML += `
//     <li class="one-book" id=${id}>
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
//   `
// );
// console.log(bookList)



const booksData = {
            "books": [
                {
                    "id": 1,
                    "author": "David Flanagan",
                    "price": 10.99,
                    "image": "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_the_definitive_guide.jpg",
                    "title": "JavaScript: The Definitive Guide, 7th Edition",
                    "level": "Beginner",
                    "tags": ["core", "frontend", "javascript"],
                    "amount": 42,
                    "shortDescription": "JavaScript is the programming language of the web and is used by more software developers today than any other programming language.",
                    "description": "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js."
                },
                {
                    "id": 2,
                    "author": "James Padolsey",
                    "price": 31.99,
                    "image": "",
                    "title": "Clean Code in JavaScript",
                    "level": "Middle",
                    "tags": ["core", "frontend", "javascript"],
                    "amount": 42,
                    "shortDescription": "Building robust apps starts with creating clean code. In this book, you'll explore techniques for doing this by learning everything from the basics of JavaScript through to the practices of clean code. You'll write functional, intuitive, and maintainable code while also understanding how your code affects the end user and the wider community.",
                    "description": "Building robust apps starts with creating clean code. In this book, you'll explore techniques for doing this by learning everything from the basics of JavaScript through to the practices of clean code. You'll write functional, intuitive, and maintainable code while also understanding how your code affects the end user and the wider community. The book starts with popular clean-coding principles such as SOLID, and the Law of Demeter (LoD), along with highlighting the enemies of writing clean code such as cargo culting and over-management. You'll then delve into JavaScript, understanding the more complex aspects of the language. Next, you'll create meaningful abstractions using design patterns, such as the Class Pattern and the Revealing Module Pattern. You'll explore real-world challenges such as DOM reconciliation, state management, dependency management, and security, both within browser and server environments. Later, you'll cover tooling and testing methodologies and the importance of documenting code. Finally, the book will focus on advocacy and good communication for improving code cleanliness within teams or workplaces, along with covering a case study for clean coding. By the end of this book, you'll be well-versed with JavaScript and have learned how to create clean abstractions, test them, and communicate about them via documentation."
                },
            ]
        };

const list = document.querySelector(".books-list");
const container = document.getElementById('books-list');

        booksData.books.forEach(book => {
            // const bookElement = document.createElement('div');
            list.innerHTML = `
                <li class="one-book" id=${book.id}>
                  <a href="./specific-book.html">
                    <div class="books-items">
                      <img src="${book.image}" width="150" alt="book" />
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
            container.appendChild(list);
        });















