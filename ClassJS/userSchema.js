// class example of the schema:
class User {
  constructor(
    userName = String(),
    email = String(),
    age = Number(),
    favorite_Movies = []
  ) {
    (this.userName = String(userName)),
      (this.email = String(email)),
      (this.id = Number(Date.now() + Math.ceil(Math.random() * 1000))),
      (this.age = Number(age)),
      (this.favorite_Movies = Array(favorite_Movies));
  }
  getInfo() {
    console.log(
      `UserName: ${this.userName}\nEmail: ${this.email}\nId: ${
        this.id
      }\nAge: ${Number(this.age)}\nFavorite Movies: ${this.favorite_Movies}`
    );
    // this way it loggs age as a number type differently from logging approach using template literals.
    // console.log(this.age)
  }
}
const userSchema = new User("Shio703", "shiodjamurashvili26@gmail.com", 19, [
  "Pirates of The Carribean",
  "The Shawshenk Redemption",
  "Roman Holiday",
]);
// userSchema.getInfo();

// object Example of the schema:
const dataSchema = {
  userName: String(),
  email: String(),
  age: Number(),
  favorite_Movies: Array(),
};

module.exports = userSchema;
