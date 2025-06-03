
const selectButton = document.querySelector('.add-button');
const todoInput = document.querySelector('.todo-input');
const listHolder = document.querySelector('.input-holder');

function clickButton() {
selectButton.addEventListener('click', () => {

    const inputs = document.querySelectorAll(".inputs");

    if (todoInput.value === '') {
        alert("Please add an Item");
        return;
    }

    if (inputs.length === 6) {
        alert("Maximum ToDo's Reached");
        return;
    }

    listHolder.insertAdjacentHTML(
        'beforeend',
        `<li class="inputs">
            ${todoInput.value}
            <img class="remove-icon" src="images/dustbin-icon.png" alt="">
        </li>`
    );

    todoInput.value = '';
    document.querySelector(".info").style.display = "block";


    const updatedInputs = document.querySelectorAll(".inputs");
    const lastInput = updatedInputs[updatedInputs.length - 1];
    const removeButton = lastInput.querySelector(".remove-icon");

    removeButton.addEventListener('click', () => {
        lastInput.remove(); 
    });
});


}

clickButton()

function showMenuLogo() {
  const element = document.querySelector(".menu-logo");
  element.style.display = "block";
}

function hideMenuLogo() {
  const element = document.querySelector(".menu-logo");
  element.style.display = "none";
}

function showMenu() {
  const element = document.querySelector(".menu");
  element.style.display = "block";
}

function hideMenu() {
  const element = document.querySelector(".menu");
  element.style.display = "none";
}

function primeMenu() {
  const logo = document.querySelector(".menu-logo");
  const menu = document.querySelector(".menu");
  const arrow = document.querySelector(".back-arrow")

  menu.style.display   = "none";

  logo.addEventListener("click", () => {
    if (menu.style.display === "block") {
      hideMenu();
      showMenuLogo();
    } else {
      showMenu();
      hideMenuLogo();
    }
  });

  menu.addEventListener("mouseleave", () => {
    hideMenu();
    showMenuLogo();
  });

  arrow.addEventListener("click", () => {
    
  })

}

document.addEventListener("DOMContentLoaded", primeMenu);
