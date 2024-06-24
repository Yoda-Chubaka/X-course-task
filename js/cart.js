document.addEventListener("DOMContentLoaded", function () {
  const cartMainElement = document.getElementById(
    "container-cart"
  );

  // Зчитуємо дані з localStorage
  const cartBooks = JSON.parse(
    localStorage.getItem("cartBook")
  );

  console.log(cartBooks);

  if (Array.isArray(cartBooks) && cartBooks.length > 0) {
    // Обчислюємо загальну ціну
    const totalPriceValue = cartBooks.reduce(
      (total, book) => total + book.price * book.quantity,
      0
    );

    // totalPriceValue.toFixed(2);

    // Генеруємо HTML для кожної книги у кошику
    const booksHTML = cartBooks.map(
      (book) => `
            <ul id="book-item-cart" class="full-item-cart cart-item" data-book-id="${book.id}">
                <li>${book.title}</li>
                <li>Items: ${book.quantity}</li>
                <li>Price: $${book.price}</li>
                 <button class="remove-button">Remove</button>
            </ul>
        `
    ).join("");
    cartMainElement.innerHTML = `
            <section class="section-vertical-align-full">
                <div>
                    <div class="purshase-button-box">
                        <button class="active-purshase-button link-purshase">Purchase</button>
                    </div>
                    <div class="box-full-cart">
                        ${booksHTML}
                    </div>
                    <div class="total-price-box">
                        <p>Total price, $${totalPriceValue}</p>
                    </div>
                </div>
            </section>
        `;
  } else {
    displayEmptyCart(cartMainElement);
  }

  // Додаткова логіка для видалення книг з корзини
  cartMainElement.addEventListener(
    "click",
    function (event) {
      if (
        event.target.classList.contains("remove-button")
      ) {
        const cartItem = event.target.closest(".cart-item");
        const bookId = parseInt(
          cartItem.getAttribute("data-book-id"),
          10
        );

        // Видаляємо книгу з кошика у localStorage
        let updatedCartBooks = cartBooks.filter(
          (book) => book.id !== bookId
        );
        localStorage.setItem(
          "cartBook",
          JSON.stringify(updatedCartBooks)
        );

        // Видаляємо елемент з DOM
        cartItem.remove();

        // Оновлюємо загальну ціну
        const newTotalPriceValue = updatedCartBooks.reduce(
          (total, book) =>
            total + book.price * book.quantity,
          0
        );

        // newTotalPriceValue.toFixed(2);

        const totalPriceBox = document.querySelector(
          ".total-price-box p"
        );
        totalPriceBox.textContent = `Total price, $${newTotalPriceValue}`;

        // Якщо кошик порожній, відображаємо повідомлення про порожній кошик
        if (updatedCartBooks.length === 0) {
          displayEmptyCart(cartMainElement);
        }
      }
    }
  );
});

function displayEmptyCart(cartMainElement) {
  cartMainElement.innerHTML = `
        <section class="section-vertical-align">
            <div class="empty-box">
                <div class="purshase-button-box">
                    <button class="inactive-purshase-button link-purshase">Purchase</button>
                </div>
                <img src="./images/cart-big-3.png" class="invert-2" width="200px" alt="empty cart" />
                <p class="paragraph-empty-cart">Your cart is empty...</p>
                <p class="paragraph-empty-cart-grey">Add your favorite books to cart</p>
            </div>
        </section>
    `;
}