function apresentarSubmenu(event) {
    let botao = event.target;
    let submenuId = botao.getAttribute("data-submenu");
    let ulSubmenu = document.getElementById(submenuId);
    ulSubmenu.classList.toggle("hidden-items");
}

let botoesMenu = document.getElementsByClassName("toggle-button");
for (let index = 0; index < botoesMenu.length; index++) {
    const botaoMenu = botoesMenu[index];
    botaoMenu.addEventListener("click", apresentarSubmenu);
}