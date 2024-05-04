/**
 * Represents a individual book that can be purchased
 */
class Book {
    /** */
    isbn : string;

    /** */
    title : string;

    price : number;

    releaseDate : Date;
}


// Book object test code
let myBook = new Book();
myBook.isbn = "123";
myBook.price = 9.99;
myBook.title = "Programming for beginners";

console.log(myBook);



window.onload = function() {
    // Set up button click for add book form
    let addBookBtn = document.querySelector("#add-book") as HTMLButtonElement;
    addBookBtn.onclick = processBook;

}

function processBook() {
    
    let userBook = getBook();
    if (userBook != null) {
        addBook(userBook);
    }
}

/**
 *  This function will retrieve all the book data 
 *  from the HTML page. If all data is valid a Book
 *  object will be returned. If any data is invalid,
 *  null will be returned including an error on the webpage.
 * @returns Information of a Book, or null
 */
function getBook():Book {
    clearAllErrorMessages();

    // Get all inputs
    let isbnTextBox = document.querySelector("#isbn") as HTMLInputElement;
    let titleTextBox = document.querySelector("#title") as HTMLInputElement;
    let priceTextBox = document.querySelector("#price") as HTMLInputElement;
    let releaseDateTextBox = document.querySelector("#release-date") as HTMLInputElement;

    // Validate data
    let isValidData = true;

    // Validate the ISBN
    let isbn:string = isbnTextBox.value;
    if (!isValidIsbn(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBN must be 13 digits";

    }

    // Validate title
    let title:string = titleTextBox.value;
    if (title.trim() == "") {
        isValidData = false;
        let titleErrorSpan = titleTextBox 
        titleErrorSpan.textContent = "You must provide a book title"
    }

    //Validate price
    let price = parseFloat(priceTextBox.value);
    if (isNaN(price) || price < 0) {
        isValidData = false;
        priceTextBox.nextElementSibling.textContent = "Price must be a positive number"
    }

    // Validate release date
    let releaseDate = releaseDateTextBox.value;
    let releaseDateCheck = Date.parse(releaseDate); // If this is invalid it will return NaN
    if (isNaN(releaseDateCheck)) {
        isValidData = false;
        releaseDateTextBox.nextElementSibling.textContent = "Release date must be a valid date";
    }
    
    
    if (isValidData) {
        // Create and populate book object if all data is valid
        let addedBook = new Book();
        addedBook.isbn = isbn;
        addedBook.price = price;
        addedBook.title = title;
        addedBook.releaseDate = new Date(releaseDate);

        return addedBook;
    }
    return null; // Return null if any invalid data is entered
}

/**
 * This validates an ISBN 13 number
 * @param data The string to be validated
 * @returns True if data is a valid ISBN 13
 */
function isValidIsbn(data:string) {
    let regex = /^\d{13}$/; // Allow only 13 digits exactly
    return regex.test(data);
}

/**
 *  Adds a Book object to web storage. Assumes all data is valid
 * @param b The Book containing valid data to be added
 */
function addBook(b:Book):void {
    
    alert("Data was valid, book added!");
    console.log(b);
}

/**
 * 
 * Clears all the validation error message spans
 * in the form
 */
function clearAllErrorMessages() {
    // Get all error spans
    let allSpans = document.querySelectorAll("form span.error-msg");

    // Loop through and set each span to an empty string

    for(let i = 0; i < allSpans.length; i++) {
        allSpans[i].textContent = "";
    } 

}   
    
 
