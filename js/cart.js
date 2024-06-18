import booksData from '../data/books.json' with { type: "json" };

document.addEventListener("DOMContentLoaded", function () {
    const cartMainElement = document.getElementById("container-cart");
    const addButton = document.querySelector(".add-button");
    console.log(addButton);
    console.log(cartMainElement);

    if (cartMainElement && addButton) {
        addButton.addEventListener("click", function () {
            const quantityOfBooks = document.getElementById("book-quantity").value;
            const totalPriceValue = document.getElementById("total-price").textContent;

            if (quantityOfBooks > 0) {
                cartMainElement.innerHTML = `
                    <section class="section-vertical-align-full">
                        <div>
                            <div class="purshase-button-box">
                                <button class="active-purshase-button link-purshase">Purсhase</button>
                            </div>
                            <div class="box-full-cart">
                                <ul id="book-item-cart" class="full-item-cart">
                                    <li>${booksData.books[0].title}</li>
                                    <li>Items: ${quantityOfBooks}</li>
                                    <li>${booksData.books[0].price}</li>
                                </ul>
                            </div>
                            <div class="total-price-box">
                                <p>Total price, $ ${totalPriceValue}</p>
                            </div>
                        </div>
                    </section>
                `;
            } else {
                cartMainElement.innerHTML = `
                    <section class="section-vertical-align">
                        <div class="empty-box">
                            <div class="purshase-button-box">
                                <button class="inactive-purshase-button link-purshase">Purсhase</button>
                            </div>
                            <img src="./images/cart-big-3.png" class="invert-2" width="200px" alt="empty card" />
                            <p class="paragraph-empty-cart">Your cart is empty...</p>
                            <p class="paragraph-empty-cart-grey">Add your favorite books to cart</p>
                        </div>
                    </section>
                `;
            }
        });
    } else {
        console.error("Required elements not found");
    }
});