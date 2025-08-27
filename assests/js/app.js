
function toggleMenu() {
    const menu = document.getElementById("navbarMenu");
    menu.classList.toggle("show");
}

const chimp = document.getElementById("chimpImage");

chimp.addEventListener("mouseover", () => {
    chimp.style.transform = "scale(1.05) rotate(2deg)";
    chimp.style.transition = "0.3s ease";
});

chimp.addEventListener("mouseout", () => {
    chimp.style.transform = "scale(1) rotate(0deg)";
});
