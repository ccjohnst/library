// Initalise an empty array to hold our books
let myLibrary = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

// Takes user's input and stores it into an array
function addBookToLibrary() {
    const bookToAdd = Object.create(Book);
    bookToAdd.title = prompt("Please enter a title");
    bookToAdd.author = prompt("Please enter an author");
    bookToAdd.pages = prompt("Please enter the pages");
    myLibrary.push(bookToAdd);
}