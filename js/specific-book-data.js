import booksData from '../data/books.json' assert { type: "json" };

// BOOKS.JSON
function renderBooks() {
    booksData.books.forEach(book => {
       
    });
}
renderBooks();


// booksData.books.forEach(book => {
//     const bookElement = document.querySelector('.li-book-name');
//     const bookElement2 = document.querySelector('.li-book-name-2');
//     const bookElement3 = document.querySelector('.li-book-name-3');
//     const bookElement4 = document.querySelector('.li-book-name-4');
//     const bookId = book.id;
//     const certainBook = booksData.books.find(el => el.id === bookId);
//     if (certainBook) {
//         bookElement.textContent = `${book.title}`
//         bookElement2.textContent = `${book.author}`
//         bookElement3.textContent = `${book.level}`
//         bookElement4.textContent = `${book.tags}`
//     }
// });



// const container = document.querySelector('.description-card');
//         booksData.books.forEach(book => {
//             const bookElement = document.createElement('li');
//             const bookId = book.id;
//             const certainBook = booksData.books.find(el => el.id === bookId);
//             if (certainBook) {
//                 bookElement.innerHTML = `
//                 <li class="li-book-name item-one-book">
//                     ${book.title}
//                 </li>
//                 <li class=" li-book-name-2 item-one-book">
//                     ${book.author}
//                 </li>
//                 <li class="li-book-name-3 item-one-book">
//                     ${book.level}
//                 </li>
//                 <li class=" li-book-name-4 item-one-book">
//                     ${book.tags}
//                 </li>
//                 `;
//                 container.appendChild(bookElement);
//         }
//         });



// const bookId = booksData.id;
// const bookElement = document.createElement('li');
//         const book = booksData.books.find(b => b.id === bookId);
// if (book) {
//             bookElement.innerHTML =
//             `<li class="li-book-name item-one-book">
//                 ${book.title}
//             </li>
//             <li class=" li-book-name-2 item-one-book">
//                 ${book.author}
//             </li>
//             <li class="li-book-name-3 item-one-book">
//                 ${book.level}
//             </li>
//             <li class=" li-book-name-4 item-one-book">
//                 ${book.tags}
//             </li>`
//         } else {
//         }

function getSelectedBookId() {
    
}

const bookId = 10; // функція для отримання id вибраної книги
const certainBook = booksData.books.find(el => el.id === bookId);
if (certainBook) {
  document.querySelector('.li-book-name').textContent = certainBook.title;
  document.querySelector('.li-book-name-2').textContent = certainBook.author;
  document.querySelector('.li-book-name-3').textContent = certainBook.level;
  document.querySelector('.li-book-name-4').textContent = certainBook.tags;
} else {
  console.error('Book not found');
}

document.getElementById('book-list').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    const bookId = event.target.getAttribute('data-id');
    const certainBook = booksData.books.find(el => el.id === bookId);
    if (certainBook) {
      document.querySelector('.li-book-name').textContent = certainBook.title;
      document.querySelector('.li-book-name-2').textContent = certainBook.author;
      document.querySelector('.li-book-name-3').textContent = certainBook.level;
      document.querySelector('.li-book-name-4').textContent = certainBook.tags;
    } else {
      console.error('Book not found');
    }
  }
});