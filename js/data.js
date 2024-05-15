import booksData from '../data/books.json' assert { type: "json" };

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