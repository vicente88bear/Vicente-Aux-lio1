// === LOGIN ===
const correctKey = "2328"; // key atualizada
const login = document.getElementById('login');
const painel = document.getElementById('painel');
const loginBtn = document.getElementById('loginBtn');
const keyInput = document.getElementById('keyInput');
const loginMsg = document.getElementById('loginMsg');

loginBtn.addEventListener('click', () => {
    if(keyInput.value === correctKey){
        login.style.display = "none";
        painel.style.display = "block";
    } else {
        loginMsg.textContent = "Key incorreta!";
    }
});

// === PAINEL ===
// Barra de progresso
const slider = document.getElementById('slider');
const barra = document.getElementById('barra');
const percent = document.getElementById('percent');

slider.addEventListener('input', () => {
    barra.style.width = slider.value + '%';
    percent.innerText = slider.value + '%';
});

// Botão Injetar com toggle
const injetarBtn = document.getElementById('injetar');
let injetado = false;

injetarBtn.addEventListener('click', () => {
    injetado = !injetado;
    if (injetado) {
        injetarBtn.style.backgroundColor = '#00ff99';
        injetarBtn.style.color = '#000';
        injetarBtn.textContent = 'Injetado';
    } else {
        injetarBtn.style.backgroundColor = '#555';
        injetarBtn.style.color = '#fff';
        injetarBtn.textContent = 'Injetar';
    }
});

loginBtn.addEventListener('click', () => {
    if(keyInput.value === correctKey){
        // muda cor do botão
        loginBtn.classList.add('logged-in');

        // animação de fade out no login
        login.style.transition = "opacity 0.4s ease";
        login.style.opacity = 0;

        setTimeout(() => {
            login.style.display = "none";
            painel.style.display = "block";
            painel.style.opacity = 0;
            painel.style.transition = "opacity 0.4s ease";
            setTimeout(() => painel.style.opacity = 1, 50);
        }, 400);
    } else {
        loginMsg.textContent = "Key incorreta!";
    }
});
