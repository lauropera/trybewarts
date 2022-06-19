function checkLogin() {
  const emailInput = document.querySelector('#e-mail');
  const senhaInput = document.querySelector('#senha');
  const resultemail = emailInput.value;
  const resultSenha = senhaInput.value;
  if (resultemail === 'tryber@teste.com' && resultSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const botaoLogin = document.querySelector('#submit');
botaoLogin.addEventListener('click', checkLogin);

const botaoEnviar = document.querySelector('#submit-btn');
const checkBoxInput = document.querySelector('#agreement');
checkBoxInput.addEventListener('click', () => {
  botaoEnviar.disabled = true;
  if (checkBoxInput.checked) {
    botaoEnviar.disabled = false;
  }
});

const text = document.querySelector('#textarea');
text.addEventListener('keyup', () => {
  const contador = document.querySelector('#counter');
  contador.innerHTML = 500 - text.value.length;
});

// Requisito 21
// ↓ Função de checagem de inputs do tipo radio
const getCheckedValue = (element) => {
  const inputs = document.querySelectorAll(element);
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].checked) {
      return inputs[i].value;
    }
  }
  return '---';
};

// ↓ Função que captura as check-box marcadas e retorna numa string
const pegaMateria = () => {
  const materias = document.querySelectorAll('.subject');
  const materiasEscolhidas = [];
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      materiasEscolhidas.push(materias[i].value);
    }
  }
  if (materiasEscolhidas.length === 0) {
    return '---';
  }
  return materiasEscolhidas.join(', ');
};

// ↓ Função que deixa os filhos do form "invisivel" menos o ultimo, que é a section de informações.
const hideForm = () => {
  const form = document.querySelector('#evaluation-form');
  const filhos = form.children;
  for (let i = 0; i < filhos.length; i += 1) {
    filhos[i].style.display = 'none';
  }
  form.lastElementChild.style.display = 'block';
};

// ↓ Cria um objeto que captura o valor dos inputs do formulário.
const getInformations = () => {
  const informacoes = {
    nome: document.querySelector('#input-name').value,
    sobrenome: document.querySelector('#input-lastname').value,
    email: document.querySelector('#input-email').value,
    casa: document.querySelector('#house').value,
    familia: getCheckedValue('.family-radio'), // Função da linha 37
    materias: pegaMateria(), // Função da linha 48
    avaliacao: getCheckedValue('.rate-radio'), // Função da linha 37
    observacoes: document.querySelector('#textarea').value,
  };
  return informacoes;
};

// ↓ Função que atribui os valores do objeto acima na tag <p>, que só funciona quando clica no botão "Enviar".
const showInformations = (event) => {
  const sectionAbout = document.querySelector('#about');
  event.preventDefault();
  hideForm();
  const objeto = getInformations();
  const p = document.createElement('p');
  p.innerText = `Nome: ${objeto.nome} ${objeto.sobrenome}
  Email: ${objeto.email}
  Casa: ${objeto.casa}
  Família: ${objeto.familia}
  Matérias: ${objeto.materias}
  Avaliação: ${objeto.avaliacao}
  Observações: ${objeto.observacoes}`;
  sectionAbout.appendChild(p);
};

botaoEnviar.addEventListener('click', showInformations);

const btnMobile = document.querySelector('#btn-mobile');

const toggleMenu = () => {
  const nav = document.querySelector('#nav');
  nav.classList.toggle('active');
};

btnMobile.addEventListener('click', toggleMenu);
