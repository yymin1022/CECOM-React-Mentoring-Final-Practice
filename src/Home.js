import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Link to="/postlist/blog">
                <p>Blog Post</p>
            </Link>

            <Link to="/postlist/project">
                <p>Project Post</p>
            </Link>
        </>
    );
}

export default Home;