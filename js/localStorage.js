document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".add-button");

    if (addButton) {
        addButton.addEventListener("click", async function () {
            const quantityOfBooks = parseInt(document.getElementById("book-quantity").value, 10);

            try {
                const response = await fetch('../data/books.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const booksData = await response.json();

                // Отримуємо id книги з URL сторінки
                const urlParams = new URLSearchParams(window.location.search);
                const bookId = parseInt(urlParams.get('bookId'), 10);


                // Шукаємо книгу за її id
                const book = booksData.books.find(book => book.id === bookId);

            
                // Створюємо об'єкт книги для зберігання в localStorage
                const bookToAddToCart = {
                    id: book.id, // Додаємо id книги
                    title: book.title,
                    price: book.price,
                    quantity: quantityOfBooks
                };

                // Отримуємо поточний вміст кошика з localStorage
                let cart = JSON.parse(localStorage.getItem('cartBook')) || [];

                // Перевіряємо, чи книга вже є в кошику
                const existingBookIndex = cart.findIndex(cartItem => cartItem.id === book.id);
                if (existingBookIndex >= 0) {
                    // Оновлюємо кількість, якщо книга вже є в кошику
                    cart[existingBookIndex].quantity += quantityOfBooks;
                } else {
                    // Додаємо нову книгу до кошика
                    cart.push(bookToAddToCart);
                }

                // Зберігаємо оновлений кошик у localStorage
                localStorage.setItem('cartBook', JSON.stringify(cart));

                // Повідомлення користувачеві про додавання книги у кошик
                const boxForNotifications = document.getElementById("purchase-notification");
                if (boxForNotifications) {
                    boxForNotifications.textContent = "Book has been added successfully!";
                    boxForNotifications.classList.add("purchase-notification");
                    setTimeout(() => {
                        boxForNotifications.classList.remove("purchase-notification");
                    }, 2500);
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        });
    } else {
        console.error("Add button element not found");
    }
});