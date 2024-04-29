(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();





var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var value = document.getElementById('book-quantity');

function buttonMinus() {
  // console.log("kjh");
  value.stepDown();
}


function buttonPlus() {
  // console.log("kjh");
  value.stepUp();
}

