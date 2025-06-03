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
