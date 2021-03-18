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
- Fix spacing between items */
function displayBook(item) {
    const cardContent = document.createElement('p');
   
    cardContent.classList.add('cardContent');
    cardContent.textContent = item.title + item.author + item.pages;
    container.appendChild(cardContent);
}
// myLibrary.forEach(displayBook);