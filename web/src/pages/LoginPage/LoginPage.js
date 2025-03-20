import User from "../../models/User.js";

async function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Erro no Servidor");
    }

    const userData = await response.json();

    // Criando a instância do usuário
    const user = new User(
      userData.name,
      userData.email,
      userData.senha,
      userData.phone,
      userData.personType
    );

    // Substitui o usuário logado anterior
    User.saveLoggedUser(user);

    alert(
      "Logado com Sucesso! Redirecionando para tela inicial em 2 segundos..."
    );

    setTimeout(() => {
      window.location.href = "../HomePage/HomePage.html";
    }, 2000);
  } catch (error) {
    console.error("Erro no login:", error);
    alert("Erro ao fazer login. Tente novamente.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", login);
});
