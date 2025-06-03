const headline = document.querySelector(".headline");
const huntButton = document.querySelector(".hunt");

const englishButton = document.querySelector(".eng");
englishButton.addEventListener('click', () => {
    headline.innerHTML = ` Search <br> any animal`;
    huntButton.innerHTML = `Hunt`;
});

const germanButton = document.querySelector(".de");
germanButton.addEventListener('click', () => {
    headline.innerHTML = 'Suche einem beliebigen Tier';
    huntButton.innerHTML = `Jagd`;
});


