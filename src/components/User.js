class User {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  // Método para salvar o usuário no localStorage
  static createUser(email, senha) {
    const user = new User(email, senha);

    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }

  // Método para recuperar o usuário do localStorage
  static getUser() {
    const userJSON = localStorage.getItem("user");

    if (userJSON) {
      const user = JSON.parse(userJSON);
      return new User(user.email, user.senha);
    }

    return null;
  }
}

export default User;
