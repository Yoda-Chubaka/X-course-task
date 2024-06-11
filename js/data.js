import booksData from '../data/books.json' with { type: "json" };

// RENDERING ALL BOOKS ON A PAGE "LIST-OF-BOOKS"
document.addEventListener('DOMContentLoaded', function () {
  function renderBooks(books) {
    const container = document.getElementById('book-list');
    if (!container) return;

    container.innerHTML = ''; 

    books.forEach(book => {
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

  // RENDERING OF A SPECIFIC BOOK ON A PAGE "SPECIFIC-BOOK"
  function renderBookDetails(bookId) {
    const certainBook = booksData.books.find(book => book.id == bookId);

    if (certainBook) {
      document.querySelector('.li-book-name').textContent = certainBook.title;
      document.querySelector('.li-book-name-2').textContent = certainBook.author;
      document.querySelector('.li-book-name-3').textContent = certainBook.level;
      const tagElements = document.querySelector('.li-book-name-4');
      tagElements.innerHTML = ''; // Clear previous content
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

  renderBooks(booksData.books);

  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get('bookId');
  if (bookId) {
    renderBookDetails(bookId);
  }

  // FILTERS ON A PAGE "LIST-OF-BOOKS"
  document.getElementById('book-search').addEventListener('input', (event) => {
    const searchValue = event.target.value.toLowerCase();
    const priceFilterValue = document.getElementById('price-filter').value;
    const filteredBooks = filterBooks(searchValue, priceFilterValue);
    renderBooks(filteredBooks);
  });

  document.getElementById('price-filter').addEventListener('change', (event) => {
    const priceFilterValue = event.target.value;
    const searchValue = document.getElementById('book-search').value.toLowerCase();
    const filteredBooks = filterBooks(searchValue, priceFilterValue);
    renderBooks(filteredBooks);
  });

 
  document.querySelector('.books-list-form').addEventListener('submit', function (e) {
    e.preventDefault();
  });
});

// FILTER BOOKS BY NAME ON A PAGE "LIST-OF-BOOKS"
function filterBooksByName(name) {
  return booksData.books.filter(book => book.title.toLowerCase().includes(name.toLowerCase()));
}

// FILTER BOOKS BY PRICE ON A PAGE "LIST-OF-BOOKS"
function filterBooksByPrice(price) {
  if (price === '0') {
    return booksData.books;
  } else if (price === '1') {
    return booksData.books.filter(book => book.price <= 15);
  } else if (price === '2') {
    return booksData.books.filter(book => book.price > 15 && book.price <= 30);
  } else if (price === '3') {
    return booksData.books.filter(book => book.price > 30);
  }
}

function filterBooks(searchValue, priceFilterValue) {
  const filteredBooksByName = filterBooksByName(searchValue);
  return filteredBooksByName.filter(book => filterBooksByPrice(priceFilterValue).includes(book));
}

// INCREASE AND DECREASE BUTTONS AND TOTAL PRICE ON A PAGE "SPECIFIC-BOOK"
document.addEventListener('DOMContentLoaded', function () {
  let bookPrice = parseFloat(document.getElementById("price-id").innerText.replace("$", ""));
  let bookQuantity = document.getElementById("book-quantity");
  let totalPriceElement = document.getElementById("total-price");
  const increaseButton = document.getElementById("plus");
  const decreaseButton = document.getElementById("minus");
  console.log(bookPrice)
  function updatePrice(bookPrice, bookQuantity) {
    let quantity = bookQuantity.value;
    if (quantity < 0) {
      bookQuantity.value = 0;
      quantity = 0;
    }
    let totalPrice = bookPrice * bookQuantity.value;
    totalPriceElement.innerText = totalPrice.toFixed(2);
  }
  updatePrice(bookPrice, bookQuantity);
  bookQuantity.addEventListener("input", function () {
    updatePrice(bookPrice, bookQuantity);
  });

  increaseButton.addEventListener("click", function () {
    bookQuantity.value = parseInt(bookQuantity.value) + 1;
    updatePrice(bookPrice, bookQuantity);
    
    if (true) {
      let totalPrice = bookPrice * bookQuantity.value;
      totalPriceElement.innerText = totalPrice.toFixed(2);
      const divQuantity = document.getElementById("for-notification");
      divQuantity.innerHTML = "";
    }
    if (!(bookQuantity.value >= 1) || bookQuantity.value === "e" || bookQuantity.value === "," || bookQuantity.value >= 43) {
      totalPriceElement.innerText = 0;
      const divQuantity = document.getElementById("for-notification");
    divQuantity.innerHTML = "<p>You should enter correct quantity</p>";
    }
  });

  decreaseButton.addEventListener("click", function () {
    bookQuantity.value = parseInt(bookQuantity.value) - 1;
    updatePrice(bookPrice, bookQuantity);

     if (true) {
      let totalPrice = bookPrice * bookQuantity.value;
      totalPriceElement.innerText = totalPrice.toFixed(2);
      const divQuantity = document.getElementById("for-notification");
      divQuantity.innerHTML = "";
    }
    if (!(bookQuantity.value >= 1) || bookQuantity.value === "e" || bookQuantity.value === "," || bookQuantity.value >= 43) {
      totalPriceElement.innerText = 0;
      const divQuantity = document.getElementById("for-notification");
    divQuantity.innerHTML = "<p>You should enter correct quantity</p>";
    }
  });
  
  document.addEventListener('keyup', event => {
    let bookQuantity = document.getElementById("book-quantity");
    
    if (event.code === 'Enter' || true) {
      let totalPrice = bookPrice * bookQuantity.value;
      totalPriceElement.innerText = totalPrice.toFixed(2);
      const divQuantity = document.getElementById("for-notification");
      divQuantity.innerHTML = "";
    }
    if (!(bookQuantity.value >= 1) || bookQuantity.value === "e" || bookQuantity.value === "," || bookQuantity.value >= 43) {
      totalPriceElement.innerText = 0;
      const divQuantity = document.getElementById("for-notification");
    divQuantity.innerHTML = "<p>You should enter correct quantity</p>";
    }
  });

  document.addEventListener('onclick', event => {
    let bookQuantity = document.getElementById("book-quantity"); 
    if (event.code === 'Enter' || true) {
      let totalPrice = bookPrice * bookQuantity.value;
      totalPriceElement.innerText = totalPrice.toFixed(2);
      const divQuantity = document.getElementById("for-notification");
      divQuantity.innerHTML = "";
    }
    if (!(bookQuantity.value >= 1) || bookQuantity.value === "e" || bookQuantity.value === "," || bookQuantity.value >= 43) {
      totalPriceElement.innerText = 0;
      const divQuantity = document.getElementById("for-notification");
    divQuantity.innerHTML = "<p>You should enter correct quantity</p>";
    }
  });
});


















