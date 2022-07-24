{
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const changeMotif = document.querySelector(".changeMotif");

        body.classList.toggle("dark");
        changeMotif.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".changeBackgroundButton");
        button.addEventListener("click", toggleBackground);
    };

    init();
}

