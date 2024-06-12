function add() {
    var message = "The title with these data has been entered into the database\n";
    var title = "Title: " + document.getElementById('name').value + "\n";
    var author = "Author: " + document.getElementById('author').value + "\n";
    var copies = "Available Copies: " + document.getElementById('copies').value + "\n";
    var pages = "Number of Pages: " + document.getElementById('pages').value + "\n";
    var isbn = "ISBN: " + document.getElementById('isbn').value + "\n";
    var price = "Price: " + document.getElementById('price').value;

    var result = message + title + author + copies + pages + isbn + price;
    alert(result);
}
