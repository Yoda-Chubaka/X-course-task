import booksData from '../data/books.json' with { type: "json" };

const cartMainElement = document.getElementById("container-cart");
const addButton = document.querySelector(".add-button");

addButton.addEventListener("onclick", function () {
    if (onClick) {
        booksData.books.forEach(book => {
            const quantityOfBooks = document.getElementById("book-quantity").target.value;
            const totalPriceValue = document.getElementById("total-price").target.value;
            cartMainElement.innerHTML = `
                <section class="section-vertical-align-full">
                    <div>
                    <div class="purshase-button-box">
                        <button class="active-purshase-button link-purshase">Purсhase
                        </button>
                    </div>
                    <div class="box-full-cart">
                        <ul id="book-item-cart" class="full-item-cart">
                            <li>${book.title}</li>
                            <li>Items: ${quantityOfBooks}</li>
                            <li>${book.price}</li>
                        </ul>
                    </div>
                    <div class="total-price-box">
                        <p>Total price, $ ${totalPriceValue}</p>
                    </div>
                </div>
            </section>
        `
        });
} else {
    cartMainElement.innerHTML = `
        <section class="section-vertical-align">
            <div class="empty-box">
                <div class="purshase-button-box">
                    <button class="inactive-purshase-button link-purshase">Purсhase
                    </button>
                </div>
                <img src="./images/cart-big-3.png" class="invert-2" width="200px" alt="empty card" />
                <p class="paragraph-empty-cart">Your cart is empty...</p>
                <p class="paragraph-empty-cart-grey">Add your favorite books to cart</p>
            </div>
        </section>
    `
}
})


