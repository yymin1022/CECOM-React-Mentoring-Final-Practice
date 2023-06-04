import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Postview = () => {
    const params = useParams();
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        let apiData = {
            postID: params.postID,
            postType: params.postType
        };

        axios.post("https://api.dev-lr.com/getPostData", apiData)
            .then((response) => {
                console.log(response.data.RESULT_DATA);
                setPostData(response.data.RESULT_DATA);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <h2>{postData.PostTitle}</h2>
            <br/>
            <p>{postData.PostContent}</p>
        </>
    );
}

export default Postview;