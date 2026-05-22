// segundos e minutos começando do zero
let segundos = 0;
let minutos = 0;
// Essa variável vai guardar o "motor" do tempo
let cronometro; 
let display = document.getElementById("display");

// Função que faz o tempo rodar e organiza os números na tela
function rodarTempo() {
    segundos++;
    
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    //.padStart(2, '0') serve para o número ficar "05" em vez de "5"
    let m = String(minutos).padStart(2, '0');
    let s = String(segundos).padStart(2, '0');
    
    display.innerText = `${m}:${s}`;
}

// 1. Botão Iniciar
function iniciar() {
    // Evita que o usuário clique várias vezes e acelere o cronômetro
    clearInterval(cronometro); 
    
    // Liga o motor: roda a função 'rodarTempo' a cada 1000ms (1 segundo)
    cronometro = setInterval(rodarTempo, 1000);
}

// 2. Botão Pausar
function pausar() {
    clearInterval(cronometro); // Desliga o motor, mas não zera os números
}

// 3. Botão Zerar
function zerar() {
    clearInterval(cronometro); // Para o motor
    segundos = 0;
    minutos = 0;
    display.innerText = "00:00"; // Reseta a tela
}
// função do botão de modo noturno
function toggleDarkMode() {
   // lida e desliga o modo noturno
   document.body.classList.toggle("dark-mode");
   // 2. Pega o botão lá no HTML pelo ID dele
    let botao = document.getElementById("btn-noturno");   
    // 3. Verifica se o body ESTÁ com o modo noturno ativado
    if (document.body.classList.contains("dark-mode")) {
        botao.innerText = "☀️"; //  o botão vira Sol
    } else {
        botao.innerText = "🌙"; // o botão vira Lua
    }
}