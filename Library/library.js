class Book {
   constructor (title, author, available = true){
    this.title = title;
    this.author = author;
    this.available = available;
   }

}

const library = {
    libri : [],

    addBook(title, author){
        const book = new Book(title, author);
        this.libri.push(book);
    },

    checkOutBook: function (title){
        // const book = this.libri.find(b => b.title === title); 
        if(libri.includes(title)){
            if(book.available = true){
                alert("Libro disponibile");
                book.available = false;
    } 
 alert ("Libro non presente nella libreria");
}
    },

    getAvailableBooks: function(){ 
        alert(libri);
        return this.libri;
}
}


const newBooks = 
`[{ "title": "Eloquent" , "author" : "Marijn"}]`;

function receiveBooks (bookJson){
    const bookToAdd = JSON.parse(bookJson);
    for(let book of bookJson ){
library.addBook(book.title, book.author);
    }
    
}


// Tests
            console.log(`There are currently ${library.libri.length} books in the library's database.`);
            library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
            receiveBooks(newBooks);
            library.checkOutBook("Eloquent JavaScript");
            library.checkOutBook("Grokking the Coding Interview");
            library.getAvailableBooks();