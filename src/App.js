import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import PostList from "./PostList";
import PostView from "./PostView";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/postlist/:postType" element={<PostList/>} />
                <Route path="/postview/:postType/:postID" element={<PostView/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;