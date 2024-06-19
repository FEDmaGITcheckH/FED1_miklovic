/*function add() {
    let message = "The title with these data has been entered into the database\n";
    let title = "Title: " + document.getElementById('name').value + "\n";
    let author = "Author: " + document.getElementById('author').value + "\n";
    let copies = "Available Copies: " + document.getElementById('copies').value + "\n";
    let pages = "Number of Pages: " + document.getElementById('pages').value + "\n";
    let isbn = "ISBN: " + document.getElementById('isbn').value + "\n";
    let price = "Price: " + document.getElementById('price').value;

    let result = message + title + author + copies + pages + isbn + price;
    alert(result);
}*/

let books = [];

function add(event) {
    event.preventDefault();
    
    let book = {
        title : document.getElementById('name').value,
        author : document.getElementById('author').value,
        copies : document.getElementById('copies').value,
        pages : document.getElementById('pages').value,
        isbn :  document.getElementById('isbn').value,
        price : document.getElementById('price').value,
    };

    books.push(book);
    write();
}

function deleteLast() {
    books.pop();
    write();
}

function deleteAll() {
    books = [];
    write();
}

function write() {
    console.clear();
    /*console.log(".......................................................");
    console.log("Books in LMS:");
    console.log(".......................................................");*/

    for(let i = 0; i < books.length; i++) {
        console.log("Book " + (i+1));
        console.log("Author: " + books[i].author);
        console.log("Title: " + books[i].title);
        console.log("Avaible copies: " + books[i].copies);
        console.log("Number of Pages: " + books[i].pages);
        console.log("ISBN: " + books[i].isbn);
        console.log("Price of Book: " + books[i].price + " Euro");
        console.log("_______________________________________________________");
    }
}