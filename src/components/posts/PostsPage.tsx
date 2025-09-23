import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export type PostType = {
    userId: number|undefined
    id: number
    title: string
    body: string
  }

const PostsPage = () => {
    const [posts,setPosts] = useState<PostType[]>([])

    useEffect(()=>{
        
        axios.get("http://127.0.0.1:8000/posts/getposts/").then(res=>setPosts(res.data)).catch(err=>console.log(err))
    },[])

    function handleDelete(id:number){
        setPosts(posts.filter(item=>item.id!== id))
        axios.delete(`http://127.0.0.1:8000/posts/delete/${id}/`).then(res=>console.log(res)).catch(err=>console.log(err))
    }

    return(
        <div className="flex items-center justify-center flex-col">
            <button className="px-3 my-2 p-1 bg-blue-800 text-white font-bold  rounded"><NavLink to="/newpost">Insert Post</NavLink></button>
            {posts.length === 0 ? <div className="flex justify-center items-center ">Loading Data...</div> :
            posts.map(item=>(
                <div key={item.id} className=" m-1 w-[95%]  border-2 p-2 grid grid-cols-[1fr_100px]  ">
                    
                    <div>
                        <p><strong>id :</strong>&nbsp;{item.id}</p>
                        <p><strong>userId :</strong>&nbsp;{item.userId}</p>
                        <p><strong>title : </strong>&nbsp;{item.title}</p>
                        <p><strong>body : </strong>&nbsp;{item.body}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <button className="px-3 p-1 bg-green-400 text-white font-bold rounded"><NavLink to={`/posts/${item.id}`}>Edit</NavLink></button>
                        <button className="px-3 p-1 bg-red-500 text-white font-bold rounded" onClick={()=>handleDelete(item.id)}>delete</button>
                    </div>
                </div>

            ))}
        </div>
    )
}
export default PostsPage;