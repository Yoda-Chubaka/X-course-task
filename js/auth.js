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

    if (!submitButton) {
        nameHeader.textContent = "Username";
    }
    if (submitButton) {
        nameHeader.textContent = localStorageName;
        name.value = "";
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





