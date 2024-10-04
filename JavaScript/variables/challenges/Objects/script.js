const library = {
    book1: {
        title: "The Giver",
        author: "Lois Lowry",
        status: {
            read: false,
            own: true,
            reading: false
        }
    },
    
    book2: {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        status: {
            read: false,
            own: true,
            reading: false
        }
    },

    book3: {
        title: "The Maze Runner",
        author: "James Dashner",
        status: {
            read: false,
            own: true,
            reading: false
        }
    }
};

for (let book in library) {
    library[book].status.read = true;
}

const {title: fb} = library.book1;

const lbJson = JSON.stringify(library);
console.log(lbJson);
console.log(library);