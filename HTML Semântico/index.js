let botaoMenu = document.getElementById("button-toggle");
let aside = document.getElementsByTagName("aside")[0];

function eventoClick() {
    alert("Oi")
}

// botaoMenu.addEventListener("click", eventoClick);
botaoMenu.addEventListener("click", () => {
    aside.classList.toggle("collapsed");
});