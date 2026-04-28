import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Book = mongoose.model("Book", bookSchema);


export default Book;
// const book1 = new Book({
//     name: "Book 1",
//     price: 10,
//     category: "Fiction",
//     image: "https://images-na.ssl-images-amazon.com/images/I/51N-u8AsiDL._SX329_BO1,204,203,200_.jpg",
//     title: "The Great Gatsby"
// });
// book1.save();
=======
export default Book;
>>>>>>> 5f380baed67908a6a910be8993dab00377e0da74























