function add() {
    let message = "The title with these data has been entered into the database\n";
    let title = "Title: " + document.getElementById('name').value + "\n";
    let author = "Author: " + document.getElementById('author').value + "\n";
    let copies = "Available Copies: " + document.getElementById('copies').value + "\n";
    let pages = "Number of Pages: " + document.getElementById('pages').value + "\n";
    let isbn = "ISBN: " + document.getElementById('isbn').value + "\n";
    let price = "Price: " + document.getElementById('price').value;

    let result = message + title + author + copies + pages + isbn + price;
    alert(result);
}
