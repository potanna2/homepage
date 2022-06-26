let button = document.querySelector(".introduction__button");
let body = document.querySelector(".body");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
});

button.addEventListener("click", () => {
    if (button.innerText === "Włącz ciemny motyw") {
        button.innerText = "Wyłącz ciemny motyw";
    } else {
        button.innerText = "Włącz ciemny motyw"
    }
});
