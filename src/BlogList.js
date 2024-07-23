import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <aside>
                        <img src={blog.image} alt="strong" />
                    </aside>
                    <div className="blog-content">
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                        </Link>
                        <p>Written by <span>{ blog.author }</span></p>
                        <p>{ blog.date }</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;