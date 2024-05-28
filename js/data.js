// import booksData from '../data/books.json' with { type: "json" };

// // BOOKS.JSON
// // Тут створюю Li для файлу list-of-books.html та вкладаю їх в ul з класом books-list
// function renderBooks() {
//   const container = document.getElementById('book-list');
//   booksData.books.forEach(book => {
//     const bookElement = document.createElement('li');
//     bookElement.setAttribute('data-id', book.id);
//     console.log(book);
//     console.log(bookElement);
//     bookElement.innerHTML = `
//                 <li class="one-book" id=${book.id}>
//                   <a href="./specific-book.html">
//                     <div class="books-items">
//                     <img src="${(book.image) ? book.image : "./images/book-template.jpg"}" width="150" alt="${book.title}" />
//                       <div>
//                         <h4 class="header-name-box">${book.title}</h4>
//                           <p class="header-name-box author">${book.author}</p>
//                       </div>
//                     </div>
//                   </a>
//                   <div class="books-price">
//                     <h4 header-name-box author>${book.price}</h4>
//                     <a href="./specific-book.html" class="link-button">View</a>
//                   </div>
//                 </li>
//             `;
//     container.appendChild(bookElement);
//   });
// }
// renderBooks();

// document.getElementById('book-list').addEventListener('click', function(event) {
//   if (event.target.tagName === 'LI') {
//     const bookId = event.target.getAttribute('data-id');
//     renderBookDetails(bookId);
//   }
// });

// function renderBookDetails(bookId) {
//   const certainBook = booksData.books.find(book => book.id == bookId);
//   if (certainBook) {
//     document.querySelector('.li-book-name').textContent = certainBook.title;
//     document.querySelector('.li-book-name-2').textContent = certainBook.author;
//     document.querySelector('.li-book-name-3').textContent = certainBook.level;
//     document.querySelector('.li-book-name-4').textContent = certainBook.tags;
//   } else {
//     console.error('Book not found');
//   }
// }

import booksData from '../data/books.json' with { type: "json" };

document.addEventListener('DOMContentLoaded', function () {
  function renderBooks() {
    const container = document.getElementById('book-list');
    if (!container) return;
    
    booksData.books.forEach(book => {
      const bookElement = document.createElement('li');    
      bookElement.setAttribute('data-id', book.id);
      bookElement.className = 'one-book';
      bookElement.innerHTML = `
        <a href="./specific-book.html?bookId=${book.id}">
          <div class="books-items">
            <img src="${book.image ? book.image : './images/book-template.jpg'}" width="150" alt="${book.title}" />
            <div>
              <h4 class="header-name-box">${book.title}</h4>
              <p class="header-name-box author">${book.author}</p>
            </div>
          </div>
        </a>
        <div class="books-price">
          <h4 class="header-name-box author">${book.price}</h4>
          <a href="./specific-book.html?bookId=${book.id}" class="link-button">View</a>
        </div>
      `;  
      container.appendChild(bookElement);
    });
  }

  function renderBookDetails(bookId) {
    const certainBook = booksData.books.find(book => book.id == bookId);
    // const bookImage = document.createElement('img');
    //   const itemImage = document.getElementById('item-card');
    //   itemImage.innerHTML =
    //   `
    //   <img src="${book.image ? book.image : './images/book-template.jpg'}" width="200" alt="${book.title}"/>
    //   `
    // itemImage.appendChild(bookImage);
    
    if (certainBook) {
      document.querySelector('.li-book-name').textContent = certainBook.title;
      document.querySelector('.li-book-name-2').textContent = certainBook.author;
      document.querySelector('.li-book-name-3').textContent = certainBook.level;
      document.querySelector('.li-book-name-4').textContent = certainBook.tags;
      document.getElementById('price-id').textContent = certainBook.price;
      document.getElementById('total-price').textContent = certainBook.price;
      document.getElementById('book-description-article').textContent = certainBook.shortDescription;
      
    } else {
      console.error('Book not found');
    }
  }

  renderBooks();

  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get('bookId');
  if (bookId) {
    renderBookDetails(bookId);
  }
});