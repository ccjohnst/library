// Initalise an empty array to hold our books
let myLibrary = [];
const container = document.querySelector('.cardsContainer');


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


/* Write a function that loops through the array and displays
each book on the page. Display as a card 
TO DO:
- Add logic to ensure items are not repeated each time the function is ran*/
function displayBook(item) {
    const cardContent = document.createElement('div');
   
    cardContent.classList.add('cardContent');
    cardContent.innerHTML = `<p> Title: ${ item.title }</p><p>Author: ${ item.author }</p><p>Pages: ${ item.pages }</p>`;
    container.appendChild(cardContent);
}
// myLibrary.forEach(displayBook); // add books stored in my library to page