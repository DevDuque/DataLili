class User {
  constructor(name, email, senha, phone, personType) {
    this.name = this.capitalizeName(name);
    this.email = email;
    this.senha = senha;
    this.phone = phone;
    this.personType = personType;
  }

  capitalizeName(name) {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  static saveLoggedUser(user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
  }

  static getLoggedUser() {
    return JSON.parse(localStorage.getItem("loggedUser"));
  }

  static logout() {
    localStorage.removeItem("loggedUser");
  }
}

export default User;
