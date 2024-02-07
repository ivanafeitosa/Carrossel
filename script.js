let navBar = document.getElementById("nav-bar");
let btnDark = document.getElementById("dark-light");
let body = document.getElementById('body');

btnDark.addEventListener('click', () => {
  if(localStorage.getItem('darkMode') == 'true') {
    // console.log("Testando darkmode");
    lightMode();
  } else {
    // console.log("Testando lightmode");
    darkMode();
  }
  
})

if(localStorage.getItem('darkMode') == 'true') {
  // console.log("Testando darkmode");
  darkMode();
} else {
  // console.log("Testando lightmode");
  lightMode();
}

function darkMode() {
  navBar.classList.remove('navbar-expand-lg');
  navBar.classList.remove('bg-body-tertiary');
  navBar.classList.add('bg-dark');
  navBar.classList.add('border-bottom');
  navBar.classList.add('border-body');
  navBar.setAttribute("data-bs-theme", "dark");

  body.classList.remove('white-mode');
  body.classList.add('dark-mode');


  localStorage.setItem('darkMode', 'true');
};

function lightMode() {
  navBar.classList.remove('bg-dark');
  navBar.classList.remove('border-bottom');
  navBar.classList.remove('border-body');
  navBar.removeAttribute('data-bs-theme');
  navBar.classList.add('navbar-expand-lg');
  navBar.classList.add('bg-body-tertiary');

  body.classList.remove('dark-mode');
  body.classList.add('white-mode');

  
  localStorage.setItem('darkMode', 'false');
};

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

let produtos = document.getElementById("grupo_cards")

for (let i=0; i <= cards.length; i++) {
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