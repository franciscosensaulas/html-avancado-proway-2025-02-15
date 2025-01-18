let botaoAbrirModal = document.getElementById("open-modal");
botaoAbrirModal.addEventListener("click", () => {
    let modal = document.getElementById("modal");
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
})

let botaoFecharModal = document.getElementById("close-modal");
botaoFecharModal.addEventListener("click", () => {
    let modal = document.getElementById("modal");
    modal.classList.remove("show");
});