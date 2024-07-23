import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending, error, setData:setBlogs} = useFetch('http://localhost:8000/blogs');

    // const [name, setName] = useState("Hansani");

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    return (
        <div className="home">

            { error && <div className="error"> { error } </div>}
            { isPending && <div>Loading......</div> }
            { blogs && <BlogList blogs={ blogs } title = "All Blogs" />}
            {/* {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Hansani")} title = "Hansani's blogs" />} */}
            {/* <button onClick={() => setName("Sanduni")}>Change name</button> */}
        </div>
    );
}
 
export default Home;