import User from "../../models/User.js";

window.onload = () => {
  const user = User.getLoggedUser();

  if (user) {
    document.getElementById("user-name").textContent = user.name;
  } else {
    alert(
      "Voce não ta logado! Redirecionando para tela de login em 2 segundos..."
    );

    setTimeout(() => {
      window.location.href = "../LoginPage/LoginPage.html";
    }, 2000);
  }
};
