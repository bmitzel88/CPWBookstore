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
    
    // Get all inputs
    let isbnTextBox = document.querySelector("#isbn") as HTMLInputElement;
    let titleTextBox = document.querySelector("#title") as HTMLInputElement;
    let priceTextBox = document.querySelector("#price") as HTMLInputElement;
    let dateTextBox = document.querySelector("#release-date") as HTMLInputElement;

    // Validate data
    let isValidData = true;

    // Validate the ISBN
    let isbn:string = isbnTextBox.value;
    if (!isValidIsbn(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBN must be 13 digits";

    }

    
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


}