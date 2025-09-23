import { useState } from "react";
import type { PostType } from "./PostsPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const InsertPost = () =>{
    let [npost,setNpost] = useState<PostType>({
        userId : undefined,
        id : 0,
        title : "",
        body : ""
    })
    let navigate = useNavigate()
    
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        let {name,value} = e.target
        setNpost(prev=>({
            ...prev,[name]:value
        }))
    }
    
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/posts/insert/",JSON.stringify(npost)).then(res=>console.log(res)).catch(err=>console.log(err))
        navigate('/posts')
    }

    return(
        <div className="w-full h-full flex items-center justify-center">
            <div className="border-2 w-[40%] h-[55%] p-5 rounded-2xl">
          <form
            action=""
            className="flex w-full flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <div className="gap-2 w-full flex">
              <label htmlFor="">UserId</label>
              <input
                className="outline-1 rounded w-full h-fit font-bold text-lg px-2"
                name="userId"
                type="number"
                value={npost.userId}
                onChange={handleChange}
              />
            </div>
            {/* <div className="gap-2 flex">
              <label htmlFor="">Id</label>
              <input
                className="outline-1 rounded w-full h-fit font-bold text-lg px-2"
                name="id"
                type="number"
                value={npost.id}
                readOnly
                onChange={handleChange}
              />
            </div> */}
            <div className="gap-2 flex">
              <label htmlFor="">Title</label>
              <input
                className="outline-1 rounded w-full h-fit font-bold text-lg px-2"
                name="title"
                type="text"
                value={npost.title}
                onChange={handleChange}
              />
            </div>
            <div className="gap-2 flex">
              <label htmlFor="">Body</label>
              <input
                className="outline-1 rounded w-full h-fit font-bold text-lg px-2"
                name="body"
                type="text"
                value={npost.body}
                onChange={handleChange}
              />
            </div>
            <div className="gap-2 flex">
              <input
                className="outline-1 rounded bg-blue-700 text-white p-1 m-auto h-fit font-bold text-lg px-4"
                type="submit"
                value="Insert"
              />
            </div>
          </form>
        </div>
        </div>
    )
}

export default InsertPost;