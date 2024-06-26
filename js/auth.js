const name = document.getElementById("username");
const submitButton = document.getElementById("submit-user-button");
const nameHeader = document.getElementById("username-header");
const usernameInput = document.getElementById("username");
const link = document.getElementById("main-header-link");
const signOutButton = document.getElementById("sign-out-button");

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
        alert("Please sign in to access the list of books.");
    }
});









    



