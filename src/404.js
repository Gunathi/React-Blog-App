import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFount = () => {
    return (
        <div className="notfound">
            <h2>404</h2>
            <h3>Sorry! Page not found</h3>
            <Link to="/">Back to HOME page</Link>
        </div>
    );
}
 
export default NotFount;