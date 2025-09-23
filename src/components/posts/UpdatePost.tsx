import { useParams } from "react-router-dom";
import type { PostType } from "./PostsPage";
import { useEffect, useState } from "react";
import axios from "axios";
const UpdatePost = () => {
    const params = useParams()
    let [post,setPost] = useState<PostType| undefined>()


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res=>setPost(res.data)).catch(err=>console.log(err))

    },[])
    console.log(post)    
    return(
        <div>
            {post && <div>
                <p>{post.id}</p>
                </div>}
            </div>
    )
}

export default UpdatePost;