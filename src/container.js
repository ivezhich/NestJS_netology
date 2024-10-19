const inversify = require("inversify");
require("reflect-metadata");
const BookStorage = require("./controllers/books.controller.js");

// Declare BooksRepository as injectable
inversify.decorate(inversify.injectable(), BookStorage);

//Create container
const container = new inversify.Container();

//Declare bindings 
container.bind(BookStorage).toSelf();

module.exports = container;