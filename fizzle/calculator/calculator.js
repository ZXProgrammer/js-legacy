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

let currentInput = "";

const ac = document.querySelector(".ac-box");
ac.addEventListener("click", () => {
  currentInput = ""
  document.getElementById("calc-display").innerText = "";
})

document.querySelectorAll(".num-box, .star-box, .minus-box, .add-box, .slash-box").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;
    currentInput += value;
    document.getElementById("calc-display").innerText = currentInput;
  });
});

const equalBtn = document.querySelector(".equal-box");
equalBtn.addEventListener("click", () => {
    const result = eval(currentInput); 
    currentInput = result.toString();  
    document.getElementById("calc-display").innerText = currentInput;
});


