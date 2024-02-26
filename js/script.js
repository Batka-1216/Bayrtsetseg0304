document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const popup = document.getElementById("popup");
    const textElement = document.querySelector("h1");
    console.log(textElement);

    noButton.addEventListener("mouseover", () => {
        noButton.style.position = "absolute";
        noButton.style.left = Math.random() * 80 + "vw";
        noButton.style.top = Math.random() * 80 + "vh";
    });

    yesButton.addEventListener("click", () => {
        popup.style.display = "flex";
        noButton.style.display = "none";
        yesButton.style.display = "none";
        textElement.innerText = "Тийм ээ чи хорвоогийн хамгийн хөөрхөн нь!";
    });

    popup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Hide the popup initially
    popup.style.display = "none";
});
