
document.addEventListener("DOMContentLoaded", function () {
  updateCartUI();
  // purchaseUI();
});

function updateCartUI() {
  const cartBooks = JSON.parse(localStorage.getItem("cartBook") || "[]");
  // const cartMainElement = document.getElementById("container-cart");
  const cartMainElementNew = document.getElementById("div-new");
  if (cartBooks.length === 0) {
    displayEmptyCart(cartMainElementNew);
  } else {
    const totalPriceValue = cartBooks.reduce(
      (total, book) => total + book.price * book.quantity,
      0
    );
    const booksHTML = cartBooks.map(book => generateBookHTML(book)).join("");
    cartMainElementNew.innerHTML = generateCartHTML(booksHTML, totalPriceValue);
  }
}

function generateBookHTML(book) {
  return `
    <ul id="book-item-cart" class="full-item-cart cart-item" data-book-id="${book.id}">
      <li>${book.title.length > 10 ? `${book.title.slice(0, 10)}…` : book.title}</li>
      <li>${book.quantity}pc(s)</li>
      <li>$${book.price}</li>
      <button class="remove-button">Remove</button>
    </ul>
  `;
}

function generateCartHTML(generateBookHTML, totalPriceValue) {
  return `
        <div class="box-full-cart">
          ${generateBookHTML}
        </div>
        <div class="total-price-box">
          <p>Total price, $${totalPriceValue.toFixed(2)}</p>
        </div>
      </div>
    
  `;
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-button")) {
    const bookId = parseInt(event.target.closest(".cart-item").getAttribute("data-book-id"), 10);
    const cartBooks = JSON.parse(localStorage.getItem("cartBook") || "[]");
    const updatedCartBooks = cartBooks.filter(book => book.id !== bookId);
    localStorage.setItem("cartBook", JSON.stringify(updatedCartBooks));
    updateCartUI();
  }
});

function displayEmptyCart(cartMainElementNew) {
  cartMainElementNew.innerHTML = `
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



// PURCHASE
const purchaseButton = document.getElementById("active-purshase-button");
const purchaseNotification = document.getElementById("full-cart-notification");

purchaseButton.addEventListener("click", function (event) {
  event.preventDefault();
  purchaseUI();
});

function purchaseUI() {
  purchaseNotification.textContent = "Thank you!!";
  purchaseNotification.classList.add("purchase-notification");
  const cartMainElementNew = document.getElementById("div-new");
  setTimeout(() => {
    
                        purchaseNotification.textContent = "";
                        purchaseNotification.classList.remove("purchase-notification");
  }, 2500);
  if (purchaseButton) {
    setTimeout(() => {
      displayEmptyCart(cartMainElementNew);
    }, 2550) 
  }
}



