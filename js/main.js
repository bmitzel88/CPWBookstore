class Book {
    isbn;
    title;
    price;
    releaseDate;
}
let myBook = new Book();
myBook.isbn = "123";
myBook.price = 9.99;
myBook.title = "Programming for beginners";
console.log(myBook);
window.onload = function () {
    let addBookBtn = document.querySelector("#add-book");
    addBookBtn.onclick = processBook;
};
function processBook() {
    let userBook = getBook();
    if (userBook != null) {
        addBook(userBook);
    }
}
function getBook() {
    let isbnTextBox = document.querySelector("#isbn");
    let titleTextBox = document.querySelector("#title");
    let priceTextBox = document.querySelector("#price");
    let dateTextBox = document.querySelector("#release-date");
    let isValidData = true;
    let isbn = isbnTextBox.value;
    if (!isValidIsbn(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBN must be 13 digits";
    }
    let title = titleTextBox.value;
    if (title.trim() == "") {
        isValidData = false;
        let titleErrorSpan = titleTextBox;
        titleErrorSpan.textContent = "You must provide a book title";
    }
    let price = parseFloat(priceTextBox.value);
    if (isNaN(price) || price < 0) {
        isValidData = false;
        priceTextBox.nextElementSibling.textContent = "Price must be a positive number";
    }
}
function isValidIsbn(data) {
    let regex = /^\d{13}$/;
    return regex.test(data);
}
function addBook(b) {
}
