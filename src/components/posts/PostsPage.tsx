import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import DeleteDialog from "../reusebleshadcn/DeleteDialog";
import { Button } from "../ui/button";
import EditDialog from "../reusebleshadcn/EditDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export type PostType = {
  userId: number | undefined;
  id: number;
  title: string;
  body: string;
};

const PostsPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/posts/getposts/")
      .then((res) => setPosts(res.data.reverse()))
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(id: number) {
    setPosts(posts.filter((item) => item.id !== id));

    axios
      .delete(`http://127.0.0.1:8000/posts/delete/${id}/`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className=" w-full f-full flex items-center justify-center flex-col">
      
      <div className="w-full flex justify-end">
        <NavLink to="/posts/newpost">
          <Button className="bg-green-500 m-4">Insert Post</Button>
        </NavLink>
      </div>

      {posts.length === 0 ? (
        <div className="flex justify-center items-center ">Loading Data...</div>
      ) : (
        <div className="w-full h-full p-1 gap-1.5 grid place-items-stretch justify-center grid-cols-3">
          {posts.map((item) => (
            <Card
              key={item.id}
              className="font-sans max-w-sm flex justify-around"
              // className=" m-1 w-[95%]  border-2 p-2 grid grid-cols-[1fr_100px]  "
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="text-black">
                  <strong className="font-bold text-md">userId :</strong>&nbsp;
                  {item.userId} <br />
                  <strong className="font-bold text-md">Id :</strong> &nbsp; {item.id}
                </CardDescription>
                <CardContent>{item.body}</CardContent>
                {/* <> <p>
                <strong>id :</strong>&nbsp;{item.id}
              </p>
              <p>
                <strong>userId :</strong>&nbsp;{item.userId}
              </p>
              <p>
                <strong>title : </strong>&nbsp;{item.title}
              </p>
              <p>
                <strong>body : </strong>&nbsp;{item.body}
              </p></> */}
              </CardHeader>
              <CardFooter className="flex justify-around">
                <Button>
                  <NavLink to={`/posts/${item.id}`}>Edit</NavLink>
                </Button>

                <DeleteDialog getChild={handleDelete} item={item} />
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
     
    </div>
  );
};
export default PostsPage;
