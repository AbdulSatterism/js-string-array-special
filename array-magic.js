// searching with word ;

const javascriptBooks = [
    'A Smarter way to learn javascript',
    'A brain friendly guide',
    'Eloquent Javascript',
    'The definitive guide',
    'javascript Science of the Ninja'
];
const searching = 'javascript';
const books = [];

// with includes
/*
for (const javascript of javascriptBooks) {
    if (javascript.toLowerCase().includes(searching.toLowerCase())) {
        books.push(javascript)
    }
}*/

// with indexOf 
/*
for (const java of javascriptBooks) {
    if (java.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        books.push(java)
    }
}
*/
/*
// it's can't select upper case and lower case
for (const java of javascriptBooks) {
    if (java.indexOf(searching) != -1) {
        books.push(java)
    }
}
*/

// with startsWith

for (const book of javascriptBooks) {
    if (book.toLowerCase().startsWith(searching.toLowerCase())) {
        books.push(book)
    }
}
console.log(books)