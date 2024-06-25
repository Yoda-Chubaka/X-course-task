const name = document.getElementById("username");
const submitButton = document.getElementById("submit-user-button");
const nameHeader = document.getElementById("username-header");

let users = {};

function User(name) {
    this.name = name;
}

function createId(users) {
    return Object.keys(users).length;
}

submitButton.addEventListener("click", () => {
    const userName = name.value;

    const newUser = new User(userName);

    const userId = "User" + createId(users);
    users[userId] = newUser;

    console.log(users);

    // ADD USERNAME TO LOCALSTORAGE
    localStorage.setItem("name", `${userName}`); 
    const localStorageName = localStorage.getItem("name");
    const link = document.getElementById("main-header-link");

    if (!submitButton) {
        nameHeader.textContent = "Username";

    }
    if (submitButton) {
        nameHeader.textContent = localStorageName;
        name.value = "";
        
    }

    // IF LOCALSTORAGE === NULL ACCESS TO LIST-OF-BOOKS PAGE WILL BE DENIED (IT DOESN'T WORK)
    if (localStorageName === null) {
        link.classList.add("enable-link");
        
    }

    if (localStorageName !== null) {
        link.classList.remove("enable-link");
    }
});

// DELETE USERNAME FROM LOCALSTORAGE
const signOutButton = document.getElementById("sign-out-button");

signOutButton.addEventListener("click", () => {
    localStorage.removeItem('name');

    if (!signOutButton) {
        nameHeader.textContent = localStorageName;
    }
    if (signOutButton) {
        nameHeader.textContent = "Username";
    }
})




