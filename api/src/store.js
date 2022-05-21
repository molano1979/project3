const Sequelize = require("sequelize");
const casual = require("casual");
import _ from "lodash";

const db = new Sequelize("favorites", null, null, {
  dialect: "sqlite",
  storage: "./favorites.sqlite",
});

const AuthorModel = db.define("author", {
  first_name: { type: Sequelize.STRING },
  last_name: { type: Sequelize.STRING },
});

const BookModel = db.define("book", {
  title: { type: Sequelize.STRING },
  cover_image_url: { type: Sequelize.STRING },
  average_rating: { type: Sequelize.STRING },
});

AuthorModel.hasMany(BookModel);
BookModel.belongsTo(AuthorModel);

const Author = db.models.author;
const Book = db.models.book;

export { Author, Book };
