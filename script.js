
let sinalLigado = false;


const botao = document.querySelector("#interruptor");
const feixeLuz = document.querySelector("#feixe-luz");
const batSinal = document.querySelector("#bat-sinal");
const holofote = document.querySelector("#holofote");
const aviso = document.querySelector("#aviso");
const chuvaContainer = document.querySelector("#chuva");


function criarChuva() {
  const quantidadeGotas = 90;

  for (let i = 0; i < quantidadeGotas; i++) {
    const gota = document.createElement("div");
    gota.classList.add("gota");


    gota.style.left = Math.random() * 110 + "%";
    gota.style.animationDuration = (Math.random() * 0.5 + 0.5) + "s";
    gota.style.animationDelay = Math.random() * 2 + "s";

    chuvaContainer.appendChild(gota);
  }
}


criarChuva();


botao.addEventListener("click", function () {
  sinalLigado = !sinalLigado;

  if (sinalLigado) {
    feixeLuz.classList.add("ligado");
    batSinal.classList.add("ligado");
    holofote.classList.add("ligado");
    aviso.textContent = "🦇 Bat-Sinal ativado nos céus de Gotham! O Cavaleiro das Trevas está a caminho.";
    botao.textContent = "Desligar Bat-Sinal";
    botao.classList.add("ativo");
  } else {
    feixeLuz.classList.remove("ligado");
    batSinal.classList.remove("ligado");
    holofote.classList.remove("ligado");
    aviso.textContent = "🌧️ Noite chuvosa em Gotham City. O Bat-Sinal está desligado.";
    botao.textContent = "🦇 Ligar Bat-Sinal";
    botao.classList.remove("ativo");
  }
});