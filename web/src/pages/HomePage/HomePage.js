import User from "../../models/User.js";

window.onload = () => {
  const user = User.getLoggedUser();

  if (user) {
    const names = user.name.split(" ");

    const firstName = names[0];
    const lastName = names[names.length - 1];

    document.getElementById(
      "user-name"
    ).textContent = `${firstName} ${lastName}`;
  } else {
    alert(
      "Voce não ta logado! Redirecionando para tela de login em 2 segundos..."
    );

    setTimeout(() => {
      window.location.href = "../LoginPage/LoginPage.html";
    }, 2000);
  }
};
