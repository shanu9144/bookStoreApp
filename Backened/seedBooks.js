import Book from "./model/book.model.js";

const books = [
    {
        name: "To Kill a Mockingbird",
        title: "A novel by Harper Lee published in 1960.",
        price: 10.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OdwZ9fJ3L.jpg"
    },
    {
        name: "1984",
        title: "A dystopian social science fiction novel by George Orwell.",
        price: 8.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
    },
    {
        name: "The Great Gatsby",
        title: "A 1925 novel by American writer F. Scott Fitzgerald.",
        price: 9.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger, partially published in serial form in 1945–1946.",
        price: 7.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Hobbit",
        title: "A children's fantasy novel by English author J. R. R. Tolkien.",
        price: 12.99,
        category: "Fantasy",
        image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
    },
    {
        name: "Fahrenheit 451",
        title: "A dystopian novel by American writer Ray Bradbury.",
        price: 6.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Pride and Prejudice",
        title: "A romantic novel of manners written by Jane Austen in 1813.",
        price: 5.99,
        category: "Romance",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Lord of the Rings",
        title: "An epic high-fantasy novel written by English author J. R. R. Tolkien.",
        price: 15.99,
        category: "Fantasy",
        image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
    },
    {
        name: "The Alchemist",
        title: "A novel by Brazilian author Paulo Coelho that was first published in 1988.",
        price: 11.99,
        category: "Adventure",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        title: "A fantasy novel written by British author J. K. Rowling.",
        price: 14.99,
        category: "Fantasy",
        image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg"
    },
    {
        name: "The Da Vinci Code",
        title: "A mystery thriller novel by Dan Brown.",
        price: 9.99,
        category: "Thriller",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Hunger Games",
        title: "A dystopian novel by Suzanne Collins.",
        price: 12.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Girl with the Dragon Tattoo",
        title: "A psychological thriller novel by Stieg Larsson.",
        price: 8.99,
        category: "Thriller",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Shining",
        title: "A horror novel by American author Stephen King.",
        price: 9.99,
        category: "Horror",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Moby-Dick",
        title: "A novel by Herman Melville.",
        price: 7.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "War and Peace",
        title: "A novel by Leo Tolstoy.",
        price: 12.99,
        category: "Historical Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Odyssey",
        title: "An epic poem attributed to Homer.",
        price: 10.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Crime and Punishment",
        title: "A novel by Fyodor Dostoevsky.",
        price: 8.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Brothers Karamazov",
        title: "A novel by Fyodor Dostoevsky.",
        price: 9.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Divine Comedy",
        title: "An epic poem by Dante Alighieri.",
        price: 11.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Iliad",
        title: "An epic poem attributed to Homer.",
        price: 10.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Count of Monte Cristo",
        title: "A novel by Alexandre Dumas.",
        price: 12.99,
        category: "Adventure",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Les Misérables",
        title: "A novel by Victor Hugo.",
        price: 14.99,
        category: "Historical Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Picture of Dorian Gray",
        title: "A novel by Oscar Wilde.",
        price: 8.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Dracula",
        title: "A novel by Bram Stoker.",
        price: 9.99,
        category: "Horror",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Frankenstein",
        title: "A novel by Mary Shelley.",
        price: 7.99,
        category: "Horror",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Adventures of Huckleberry Finn",
        title: "A novel by Mark Twain.",
        price: 6.99,
        category: "Adventure",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Adventures of Tom Sawyer",
        title: "A novel by Mark Twain.",
        price: 5.99,
        category: "Adventure",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Three Musketeers",
        title: "A novel by Alexandre Dumas.",
        price: 8.99,
        category: "Adventure",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Hunchback of Notre-Dame",
        title: "A novel by Victor Hugo.",
        price: 9.99,
        category: "Historical Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Scarlet Letter",
        title: "A novel by Nathaniel Hawthorne.",
        price: 7.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Call of the Wild",
        title: "A novel by Jack London.",
        price: 6.99,
        category: "Adventure",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "White Fang",
        title: "A novel by Jack London.",
        price: 5.99,
        category: "Adventure",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Old Man and the Sea",
        title: "A novel by Ernest Hemingway.",
        price: 8.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "For Whom the Bell Tolls",
        title: "A novel by Ernest Hemingway.",
        price: 9.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "A Farewell to Arms",
        title: "A novel by Ernest Hemingway.",
        price: 7.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Sun Also Rises",
        title: "A novel by Ernest Hemingway.",
        price: 6.99,
        category: "Classic",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Brave New World",
        title: "A dystopian novel by Aldous Huxley.",
        price: 8.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Animal Farm",
        title: "A dystopian novella by George Orwell.",
        price: 5.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Road",
        title: "A novel by Cormac McCarthy.",
        price: 9.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Handmaid's Tale",
        title: "A dystopian novel by Margaret Atwood.",
        price: 8.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Dune",
        title: "A science fiction novel by Frank Herbert.",
        price: 10.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Neuromancer",
        title: "A science fiction novel by William Gibson.",
        price: 7.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Snow Crash",
        title: "A science fiction novel by Neal Stephenson.",
        price: 8.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Left Hand of Darkness",
        title: "A science fiction novel by Ursula K. Le Guin.",
        price: 9.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Dispossessed",
        title: "A science fiction novel by Ursula K. Le Guin.",
        price: 8.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Lathe of Heaven",
        title: "A science fiction novel by Ursula K. Le Guin.",
        price: 7.99,
        category: "Science Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Wind-Up Bird Chronicle",
        title: "A novel by Haruki Murakami.",
        price: 9.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Kafka on the Shore",
        title: "A novel by Haruki Murakami.",
        price: 8.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Norwegian Wood",
        title: "A novel by Haruki Murakami.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "1Q84",
        title: "A novel by Haruki Murakami.",
        price: 10.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catch-22",
        title: "A novel by Joseph Heller.",
        price: 9.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Slaughterhouse-Five",
        title: "A novel by Kurt Vonnegut.",
        price: 8.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Cat's Cradle",
        title: "A novel by Kurt Vonnegut.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Breakfast of Champions",
        title: "A novel by Kurt Vonnegut.",
        price: 9.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Sirens of Titan",
        title: "A novel by Kurt Vonnegut.",
        price: 8.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Mother Night",
        title: "A novel by Kurt Vonnegut.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Player Piano",
        title: "A novel by Kurt Vonnegut.",
        price: 6.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Road to Wigan Pier",
        title: "A book by George Orwell.",
        price: 8.99,
        category: "Non-Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Homage to Catalonia",
        title: "A book by George Orwell.",
        price: 9.99,
        category: "Non-Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Down and Out in Paris and London",
        title: "A book by George Orwell.",
        price: 7.99,
        category: "Non-Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Grapes of Wrath",
        title: "A novel by John Steinbeck.",
        price: 9.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Of Mice and Men",
        title: "A novel by John Steinbeck.",
        price: 8.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "East of Eden",
        title: "A novel by John Steinbeck.",
        price: 10.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Pearl",
        title: "A novel by John Steinbeck.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Cannery Row",
        title: "A novel by John Steinbeck.",
        price: 6.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Winter of Our Discontent",
        title: "A novel by John Steinbeck.",
        price: 8.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Grapes of Wrath",
        title: "A novel by John Steinbeck.",
        price: 9.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Nine Stories",
        title: "A collection of short stories by J. D. Salinger.",
        price: 6.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Franny and Zooey",
        title: "A novel by J. D. Salinger.",
        price: 8.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "Raise High the Roof Beam, Carpenters and Seymour: An Introduction",
        title: "A collection of two novellas by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
    {
        name: "The Catcher in the Rye",
        title: "A novel by J. D. Salinger.",
        price: 7.99,
        category: "Fiction",
        image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
    },
];
    export async function seedBooks() {
        try {
            await Book.deleteMany({});
            console.log("Existing books removed");
    
            await Book.insertMany(books);
            console.log("Dummy books data inserted");
        } catch (error) {
            console.log("Error: ", error);
        }
    }