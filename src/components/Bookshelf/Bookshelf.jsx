import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    const handleChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        //add code here
        event.preventDefault();
        setBooks([...books, { title: newBook.title, author: newBook.author }]);
        setNewBook({ title: '', author: '' });
    }
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">Title: </label>
                    <input
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleChange}
                    />
                    <label htmlFor="author">Author: </label>
                    <input
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit your name</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h4>Title: {book.title}</h4>
                        <h4>Author: {book.author}</h4>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default Bookshelf;