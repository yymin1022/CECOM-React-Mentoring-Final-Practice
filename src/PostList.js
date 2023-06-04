import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
    const params = useParams();
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        let apiData = {
            postType: params.postType
        };

        axios.post("https://api.dev-lr.com/getPostList", apiData)
            .then((response) => {
                console.log(response.data.RESULT_DATA);
                setPostList(response.data.RESULT_DATA.PostList);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {
                postList.map((postItem) => {
                    return (
                        <Link to={`/postview/${params.postType}/${postItem.postID}`}>
                            <p>{postItem.postTitle}</p>
                        </Link>
                    );
                })
            }
        </>
    );
}

export default PostList;