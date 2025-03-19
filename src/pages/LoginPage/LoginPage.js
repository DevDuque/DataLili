import User from "../../components/User.js";

async function handleSubmit(event) {
  event.preventDefault(); // Impede o envio real do formulário

  // Recupera os dados inseridos
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  // Verifica se o usuário já existe no localStorage
  const userExists = User.getUser();

  if (userExists && userExists.email === email && userExists.senha === senha) {
    alert("Você já está logado!");

    console.log("Dados do usuário no console:", userExists);

    // Redireciona para a Home
    window.location.href = "../HomePage/HomePage.html";
    return;
  }

  // Cria uma instância da classe User e armazenando no localStorage
  const user = User.createUser(email, senha);

  console.log("Dados do usuário no console:", user);

  // Atraso de 10 segundos antes de redirecionar para a Home
  setTimeout(() => {
    window.location.href = "../HomePage/HomePage.html";
  }, 10000);
}

// Esperando o DOM carregar antes de adicionar o event listener
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  form.addEventListener("submit", handleSubmit);
});
