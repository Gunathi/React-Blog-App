import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';

const BlogDetails = () => {

    const { id } = useParams();
    const {data: blogs, isPending, error, setData:setBlogs} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
             { isPending && <div>Loading......</div> }
             { error && <div className="error"> { error } </div>}
             { blogs && (
                <article>
                    <p>{ blogs.date }</p>
                    <h2>{ blogs.title }</h2>
                    <img src={ blogs.image } />
                    <p>Written by <span>{ blogs.author }</span></p>
                    <p>{ blogs.body }</p>
                </article>
             )}
             <button onClick={ handleDelete }>Delete Blog</button>
        </div>
    );
}
 
export default BlogDetails;