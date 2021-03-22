// Initalise an empty array to hold our books
let myLibrary = [];

const container = document.querySelector('.cardsContainer');

const newBookButton = document.querySelector('#newBookButton')
newBookButton.addEventListener("click", addBookToLibrary);

// Create book object
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

/* Create form and pass input to Book object
TO DO:
- Finish creating all input boxes
- Wire up to submitt 
- Create objects from the submitted values of input*/
function displayForm() {
    // Create Form
    let form = document.createElement('form');

    // create title input
    let titleInput = doucment.createElement('input');
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Title");


    // create author input
    let authorInput = document.createElement("input");
    authorInput.setAttribute("name", "title");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("placeholder", "Author");

    // create pases input
    let pagesInput = document.createElement("input");
    pagesInput.setAttribute("name", "pages");
    pagesInput.setAttribute("type", "number");
    pagesInput.setAttribute("placeholder", "Pages read");

    // create read input
    let readInput = document.createElement("input");
    readInput.setAttribute("name", "read");
    readInput.setAttribute("type", "text");
    readInput.setAttribute("placeholder", "Read status")
}

/* Takes user's input and stores it into an array. 
TODO:
- Validate input*/
function addBookToLibrary() {
    const bookToAdd = Object.create(Book);
    bookToAdd.title = prompt("Please enter a title");
    bookToAdd.author = prompt("Please enter an author");
    bookToAdd.pages = prompt("Please enter the pages");
    bookToAdd.read = prompt("Have you read this?", "Yes");
    myLibrary.push(bookToAdd);
    createDisplayBook(bookToAdd);
}

/* Display book to page 
TODO: */
function createDisplayBook(item) {
    // Get the index of the last array obj
    const lastIndexNum = myLibrary.length - 1;     
    
    // Create divs containing Book obj info
    const cardContent = document.createElement('div');
    cardContent.setAttribute("id", `book${lastIndexNum}`); // Make attribute equal to the array
    cardContent.classList.add('cardContent');
    cardContent.innerHTML = `<p id="Title${ lastIndexNum }"> Title: ${ item.title }</p>
    <p id="Author${ lastIndexNum }">Author: ${ item.author }</p>
    <p id="Pages${ lastIndexNum }">Pages: ${ item.pages }</p>
    <p id="Read${ lastIndexNum }">Read: ${ item.read }</p>`;
    
    // Create the delete buttons
    const delButton = document.createElement('button');
    delButton.classList.add("deleteButton");
    delButton.textContent  = "DELETE";

    // Create our read status button
    const readButton = document.createElement('button');
    readButton.classList.add("readButtons");
    readButton.setAttribute("id", `button${ lastIndexNum }`);
    readButton.textContent = "MARK AS READ";


    // Add delete button to Object div and add Object div to the container
    cardContent.appendChild(delButton);
    cardContent.appendChild(readButton);
    container.appendChild(cardContent);

    /* Delete book button */
    const delBookButton = document.querySelectorAll('.deleteButton');
    delBookButton.forEach((button) => {
        button.addEventListener('click', () => {
            button.parentElement.remove(); 
        })
    })

    /* addEventListener to listen for click on  mark as read button*/
    document.addEventListener('click', function (event) {
        if (event.target.matches(`#button${ lastIndexNum }`)) {
            item.read = "Yes";
            document.getElementById(`Read${ lastIndexNum }`).innerHTML = `Read: ${ item.read }`;

        }
    }, false);
}


/* Display all booked stored in myLibrary array to page. 
Run forEach on our createdisplay book function */
function displayAllBooks() {
    return myLibrary.forEach(createDisplayBook);
}

