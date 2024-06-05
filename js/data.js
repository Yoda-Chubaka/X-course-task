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
  
    if (certainBook) {
      document.querySelector('.li-book-name').textContent = certainBook.title;
      document.querySelector('.li-book-name-2').textContent = certainBook.author;
      document.querySelector('.li-book-name-3').textContent = certainBook.level;
      const tagElements = document.querySelector('.li-book-name-4');
      for (const tag of certainBook.tags) {
        const linkTag = document.createElement("li");
        linkTag.textContent = '#' + tag;
        tagElements.append(linkTag);
    }
      document.getElementById('price-id').textContent = certainBook.price;
      document.getElementById('total-price').textContent = certainBook.price;
      document.getElementById('book-description-article').textContent = certainBook.shortDescription;
      const bookImage = document.getElementById('certain-book-image');
      bookImage.setAttribute('src', `${certainBook.image ? certainBook.image : './images/book-template.jpg'}`);
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









 // FILTERS

function filterBooksByName(name) {
		return books.filter(book => book.title.toLowerCase().includes(name.toLowerCase()));
	}
	
	function filterBooksByPrice(priceRange) {
		if (priceRange === 'all') {
			return books;
		} else if (priceRange === '15') {
			return books.filter(book => book.price <= 15);
		} else if (priceRange === '15-30') {
			return books.filter(book => book.price > 15 && book.price <= 30);
		} else if (priceRange === '30') {
			return books.filter(book => book.price > 30);
		}
}  
