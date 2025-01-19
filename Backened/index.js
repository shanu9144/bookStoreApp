import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import { seedBooks } from "./seedBooks.js"; // Import the seeding function

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect(URI, {
            // useNewUrlParser and useUnifiedTopology are no longer needed
        });
        console.log("Connected to MongoDB");

        // Seed the database with dummy data
        await seedBooks();
    } catch (error) {
        console.log("Error: ", error);
    }
}

connectToDatabase();

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Handle requests from the frontend
app.get("/api", (req, res) => {
    res.send("API is working");
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../Frontened/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../Frontened", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});