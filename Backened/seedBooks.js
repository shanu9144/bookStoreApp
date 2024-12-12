import Book from "./model/book.model.js";

const books = [
    {
        name: "Book One",
        price: 19.99,
        category: "Fiction",
        image: "image1.jpg",
        title: "The First Book"
    },
    {
        name: "Book Two",
        price: 29.99,
        category: "Non-Fiction",
        image: "image2.jpg",
        title: "The Second Book"
    },
    {
        name: "Book Three",
        price: 39.99,
        category: "Science",
        image: "image3.jpg",
        title: "The Third Book"
    },
    {
        name: "Book Four",
        price: 49.99,
        category: "History",
        image: "image4.jpg",
        title: "The Fourth Book"
    }
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