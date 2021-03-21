// Initalise an empty array to hold our books
let myLibrary = [];
const container = document.querySelector('.cardsContainer');

const newBookButton = document.querySelector('#newBookButton')
newBookButton.addEventListener("click", addBookToLibrary);

const delBookButton = document.querySelectorAll('.deleteButton');
delBookButton.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('success')
    })
})

// Create book object
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

/* Takes user's input and stores it into an array. 
TODO:
- Validate input*/
function addBookToLibrary() {
    const bookToAdd = Object.create(Book);
    bookToAdd.title = prompt("Please enter a title");
    bookToAdd.author = prompt("Please enter an author");
    bookToAdd.pages = prompt("Please enter the pages");
    myLibrary.push(bookToAdd);
    createDisplayBook(bookToAdd);
}

/* Display book to page 
TODO:
- Set a variable to the current index of item, and use to create set attribute no.*/
function createDisplayBook(item) {
    const cardContent = document.createElement('div');
    const delButton = document.createElement('button')
    const lastIndexNum = myLibrary.length - 1; // Get the index of the last array obj
    cardContent.setAttribute("id", `book${lastIndexNum}`); // Make attribute equal to the array
    delButton.setAttribute("id", `book${lastIndexNum}`);
    delButton.classList.add("deleteButton");
    delButton.textContent  = "DELETE";
    cardContent.classList.add('cardContent');
    cardContent.innerHTML = `<p> Title: ${ item.title }</p><p>Author: ${ item.author }</p><p>Pages: ${ item.pages }</p>`;
    cardContent.appendChild(delButton);
    container.appendChild(cardContent);

    /*Delete book button */
    const delBookButton = document.querySelectorAll('.deleteButton');
    delBookButton.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentElement.remove(); 
    })
})
}

/* Display all booked stored in myLibrary array to page. 
Run forEach on our createdisplay book function */
function displayAllBooks() {
    return myLibrary.forEach(createDisplayBook);
}

// function deleteBook(x) {
//     let el = getElementById(x)
//     el.remove();
// }