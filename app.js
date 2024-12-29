// creating the library
library = [];

// Adding books to the library
library.push({ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', yearPublished: 1925, available: true});
library.push({ title: 'To kill a Mockingbird', author: 'Harper Lee', yearPublished: 1960, available: true});
library.push({ title: '1984', author: 'George Orwell', yearPublished: 19, available: false});
library.push({ title: 'Pride and Prejudice', author: 'Jane ', yearPublished: 1925, available: true})

console.log(library);

// Updating the Availability of a book
library[2].available = true;

console.log(library);

// removing a book from the library
library.splice(3, 1);
console.log(library);

// Checking if a book is available
const checkBook = library.map(book => book.title).includes("The Great Gatsby");
console.log(checkBook);

// Borrow the first book
if(library[0].available) {
    library[0].available = false;
    const borrowedBook = library.shift();
    console.log(borrowedBook) 
}

// Add a New Book
library.unshift({title: 'The Catcher in the Rye', author: 'J.D Sainger', yearPublished: 1951, available: true});
console.log(library);

// combine all the books
const combine = library.map(combineBooks => combineBooks.title).join(", ");
console.log(combine);

const newArrivals = library.slice(-2);
console.log(newArrivals);



