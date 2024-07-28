const name = document.getElementById("username");
const submitButton = document.getElementById("submit-user-button");
const nameHeader = document.getElementById("username-header");
const usernameInput = document.getElementById("username");
const link = document.getElementById("main-header-link");
const signOutButton = document.getElementById("sign-out-button");
const cartIcon = document.getElementById("cart-icon");
const cartIconMobile = document.getElementById("cart-icon-mobile");
const mobileMenuNotification = document.getElementById("mobile-menu-notification");

// ADD USERNAME TO LOCALSTORAGE
document.addEventListener("DOMContentLoaded", () => {
    updateUI();
});

function updateUI() {
    const storedName = localStorage.getItem("name");
    nameHeader.textContent = storedName ? storedName : "Username";
    // link.classList.toggle("enable-link", !storedName);
}

submitButton.addEventListener("click", () => {
    const userName = usernameInput.value.trim();
    if (userName) {
        localStorage.setItem("name", userName);
        updateUI();
        usernameInput.value = "";
    }
});

signOutButton.addEventListener("click", () => {
    localStorage.removeItem('name');
    updateUI();
});


// ACCESS DENIED
link.addEventListener("click", (event) => {
    if (!localStorage.getItem("name")) {
        event.preventDefault();
        deniedUI();
    }
});

function deniedUI() {
    const deniedNotification = document.getElementById("denied-notification");


    if (!localStorage.getItem("name")) {
        submitButton.classList.add("access-denied");
        usernameInput.classList.add("access-denied");
        deniedNotification.classList.add("denied-notification");
        deniedNotification.textContent = "You should register!";
        mobileMenuNotification.classList.add("denied-notification-mobile");
        mobileMenuNotification.textContent = "You should register!";
        setTimeout(() => {
            usernameInput.classList.remove("access-denied");
            submitButton.classList.remove("access-denied");
            deniedNotification.classList.remove("denied-notification");
            deniedNotification.textContent = "";
            mobileMenuNotification.classList.remove("denied-notification-mobile");
            mobileMenuNotification.textContent = "";
        }, 2500);
    }
}

cartIcon.addEventListener("click", (event) => {
    if (!localStorage.getItem("name")) {
        event.preventDefault();
        deniedUI();
    }
});

cartIconMobile.addEventListener("click", (event) => {
    if (!localStorage.getItem("name")) {
        event.preventDefault();
        deniedUI();
    }
});














    



