import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState();
    const [date, setDate] = useState();
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);

        const blog = {title, body, author, date};
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog added");
            setIsPending(false);
            history.push('/')
        })
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value={ title }
                onChange={ (e) => setTitle(e.target.value) }
                />
                <br />
                <br />

                <label>Blog Content:</label>
                <textarea
                rows={ 10 }
                required
                value={ body }
                onChange={ (e) => setBody(e.target.value) }
                ></textarea>
                <br />
                <br />

                <label>Blog Author:</label>
                <input
                    type="text"
                    value={ author }
                    required
                    onChange={ (e) => setAuthor(e.target.value) }
                />
                <br />
                <br />

                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                { isPending && <button>Adding Blog..</button> }
                { !isPending && <button>Add Blog</button> }
            </form>
        </div>
    );
}
 
export default Create;