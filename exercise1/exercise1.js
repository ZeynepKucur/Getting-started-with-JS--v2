let favoriteBooks =[];

function addFavoriteBook(bookName){
    if(bookName.includes("Great")==false){
        favoriteBooks.push(bookName);
    }
}

function printFavoriteBooks(){
    console.log(`number of favorite books:${favoriteBooks.length}`);
    console.log("Favorite Books:");
    for(let book of favoriteBooks){
        console.log(book);
    }
}
addFavoriteBook("A song of ice and fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great expectations");
addFavoriteBook("You don't know JS");
printFavoriteBooks();
