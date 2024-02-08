let produtos = document.getElementById("grupo_cards");
let navBar = document.getElementById("nav-bar");
let btnDark = document.getElementById("dark-light");
let body = document.getElementById('body');
let icon = document.getElementById('icon');
let nomeBtn = document.getElementById('nome-botao');

let cards = [
  {
    id: 1,
    nome: "Refrigerante",
    descricao: "Descrição do refrigerante",
    imagem: "img/fogao_embutido.webp"
  },
  {
    id: 2,
    nome: "Pizza",
    descricao: "Descrição da pizza",
    imagem: "img/fogao_embutido.webp"
  },
  {
    id: 3,
    nome: "Smartphone",
    descricao: "Descrição do smartphone",
    imagem: "img/fogao_embutido.webp"
  },
  {
    id: 4,
    nome: "Cerveja",
    descricao: "Descrição da cerveja",
    imagem: "img/fogao_embutido.webp"
  },
  {
    id: 5,
    nome: "Chocolate",
    descricao: "Descrição do chocolate",
    imagem: "img/fogao_embutido.webp"
  },
  {
    id: 6,
    nome: "Laptop",
    descricao: "Descrição do laptop",
    imagem: "img/fogao_embutido.webp"
  },
  {
    id: 7,
    nome: "Café",
    descricao: "Descrição do café",
    imagem: "img/fogao_embutido.webp"
  },
  {
    id: 8,
    tipo: "Alimento",
    descricao: "Descrição do hambúrguer",
    imagem: "img/fogao_embutido.webp"
  },
  {
    id: 9,
    nome: "Fones de Ouvido",
    descricao: "Descrição dos fones de ouvido",
    imagem: "img/fogao_embutido.webp"
  },
  {
    id: 10,
    nome: "Chá",
    descricao: "Descrição do chá",
    imagem: "img/fogao_embutido.webp"
  }
];

for (let i = 0; i < cards.length; i++) {
  produtos.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${cards[i].imagem}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${cards[i].nome}</h5>
      <p class="card-text">${cards[i].descricao}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    `
}


btnDark.addEventListener('click', () => {
  if (localStorage.getItem('darkMode') == 'true') {
    lightMode();
  } else {
    darkMode();
  }

})

if (localStorage.getItem('darkMode') == 'true') {
  darkMode();
} else {
  lightMode();
}

function darkMode() {
  navBar.classList.add('bg-dark');
  navBar.setAttribute("data-bs-theme", "dark");

  body.classList.remove('white-mode');
  body.classList.add('dark-mode');

  document.querySelectorAll('.grupo_cards .card').forEach(elemento => {
    elemento.classList.add("text-bg-dark");
  });

  nomeBtn.innerText = "Modo claro";
  icon.src = "img/brightness-high.svg"
  btnDark.classList.remove("btn-light");
  btnDark.classList.add("btn-dark");

  localStorage.setItem('darkMode', 'true');
};

function lightMode() {
  navBar.classList.remove('bg-dark');
  navBar.removeAttribute('data-bs-theme');

  body.classList.remove('dark-mode');
  body.classList.add('white-mode');

  document.querySelectorAll('.grupo_cards .card').forEach(elemento => {
    elemento.classList.remove("text-bg-dark");
  });

  nomeBtn.innerText = "Modo escuro";
  icon.src = "img/brightness-high-fill.svg"
  btnDark.classList.remove("btn-dark");
  btnDark.classList.add("btn-light");

  localStorage.setItem('darkMode', 'false');
};





