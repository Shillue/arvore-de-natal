// Onde vai cair a neve
const container = document.querySelector(".neve-container");

// Criar Vários Flocos
for(let i = 0; i < 80; i++){
    // Criando um Floco
    const floco = document.createElement("div");
    floco.classList.add("floco");

    // Posição aleatória
    floco.style.left =Math.random() * 100 + "vw";
    // Velocidade
    floco.style.animationDuration = 5 + Math.random() *10 + "s";
    // Transparência
    floco.style.opacity = Math.random();
    // Tamanhos diferentes dos flocos
    floco.style.fontSize = 10 + Math.random() * 10 + "px";

    floco.innerHTML = "❄";
    // Colocando o floco na tela
    container.appendChild(floco);
}