import booksData from '../data/books.json' assert { type: "json" };

// BOOKS.JSON
function renderBooks() {
    booksData.books.forEach(book => {
       
    });
}
renderBooks();

// function getSelectedBookId() {
//   document.getElementById('book-list').addEventListener('click', function (event) {
//     if (event.target.tagName === 'LI') {
//       const bookId = event.target.getAttribute('data-id');
//       const certainBook = booksData.books.find(el => el.id === bookId);
//     }
//   })
// }

const bookId = 20; // функція для отримання id вибраної книги
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