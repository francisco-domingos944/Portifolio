const btn = document.getElementById('botao-tema');
const html = document.documentElement;

// 1. Verifica se já tinha tema salvo
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo) {
  html.setAttribute('data-theme', temaSalvo);
  btn.textContent = temaSalvo === 'dark' ? 'Claro' : 'Escuro';
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // Se não tem salvo, usa o do sistema
  html.setAttribute('data-theme', 'dark');
  btn.textContent = 'Claro';
}

// 2. Ao clicar, troca
btn.addEventListener('click', () => {
  const temaAtual = html.getAttribute('data-theme');
  const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', novoTema);
  localStorage.setItem('tema', novoTema);
  btn.textContent = novoTema === 'dark' ? 'Claro' : 'Escuro';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15
});

const hiddenElements = document.querySelectorAll('.reveal-left');
hiddenElements.forEach((el) => observer.observe(el));

const botao_menu = document.getElementById('hamburguer');
const nav = document.getElementById('nav');
botao_menu.addEventListener('click', () => {
  nav.classList.toggle('active');
});