import { useNavigate, useParams } from "react-router-dom";
import type { PostType } from "./PostsPage";
import { useEffect, useState } from "react";
import axios from "axios";
const UpdatePost = () => {
  const params = useParams();
  let [post, setPost] = useState<PostType>({
    userId: 0,
    id: 0,
    title: "",
    body: "",
  });
  let navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/posts/getpost/${params.id}/`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(post);
    axios.put(
      `http://127.0.0.1:8000/posts/update/${params.id}/`,
      post
    ).then(res=>console.log(res)).catch(err=>console.log(err));
    navigate('/posts')
  }
  return (
    <div className="flex w-full h-full justify-center items-center font-mono">
      {post && (
        <div className="border-2 w-[30%] h-[55%] p-5 rounded-2xl">
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
                value={post.userId}
                onChange={handleChange}
              />
            </div>
            <div className="gap-2 flex">
              <label htmlFor="">Id</label>
              <input
                className="outline-1 rounded w-full h-fit font-bold text-lg px-2"
                name="id"
                type="number"
                value={post.id}
                readOnly
                onChange={handleChange}
              />
            </div>
            <div className="gap-2 flex">
              <label htmlFor="">Title</label>
              <input
                className="outline-1 rounded w-full h-fit font-bold text-lg px-2"
                name="title"
                type="text"
                value={post.title}
                onChange={handleChange}
              />
            </div>
            <div className="gap-2 flex">
              <label htmlFor="">Body</label>
              <input
                className="outline-1 rounded w-full h-fit font-bold text-lg px-2"
                name="body"
                type="text"
                value={post.body}
                onChange={handleChange}
              />
            </div>
            <div className="gap-2 flex">
              <input
                className="outline-1 rounded bg-blue-700 text-white p-1 m-auto h-fit font-bold text-lg px-4"
                type="submit"
                value="Update"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdatePost;
