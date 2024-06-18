document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".add-button");
    const boxForNotifications = document.getElementById("purchase-notification");
    const quantityOfBooks = document.getElementById("book-quantity").value;

    if (addButton) {
        addButton.addEventListener("click", function () {
            boxForNotifications.textContent = "Book has been added successfully!";
            boxForNotifications.classList.add("purchase-notification");
            setTimeout(() => {
                boxForNotifications.classList.remove("purchase-notification");
                boxForNotifications.classList.add("purchase-inactive");
            }, 2000);
        });
    }    
    else {
            console.error("Required elements not found");
        }
});