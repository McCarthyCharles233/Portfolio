document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".links").classList.toggle("open");

    document.querySelector(".close-button").style.display = "block";

    document.querySelector(".menu").style.display = "none";
});

document.querySelector(".close-button").addEventListener("click", () => {
    document.querySelector(".links").style.display = "none"

    location.reload();
});

