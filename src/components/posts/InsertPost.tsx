import { useState } from "react";
import type { PostType } from "./PostsPage";
import { CoolMode } from "@/components/ui/cool-mode"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type PostTypeNoId = {
    userId: number | undefined;
    title: string;
    body: string;
}
const InsertPost = () => {
  let [npost, setNpost] = useState<PostTypeNoId>({
    userId: 0,
    title: "",
    body: "",
  });
  let navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = e.target;
    setNpost((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(typeof npost.userId)
    axios
      .post("http://127.0.0.1:8000/posts/insert/", JSON.stringify(npost))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/posts");
  }

  function handleCancel(){
    navigate("/posts")
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle>Insert New Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action=""
            className="flex w-full flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <div className="grid gap-2">
                <Label htmlFor="">UserId</Label>
                <Input
                  
                  name="userId"
                  type="number"
                  max={10000}
                  min={1}
                  value={npost.userId}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {/* <div className="gap-2 flex">
              <Label htmlFor="">Id</Label>
              <Input
                
                name="id"
                type="number"
                value={npost.id}
                readOnly
                onChange={handleChange}
              />
            </div> */}
            <div className="flex flex-col">
              <div className="grid gap-2">
                <Label htmlFor="">Title</Label>
                <Input
                  required
                  name="title"
                  type="text"
                  value={npost.title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="grid gap-2">
                <Label htmlFor="">Body</Label>
                <Input
                  required
                  name="body"
                  type="text"
                  value={npost.body}
                  onChange={handleChange}
                />
              </div>
            </div>
            <CardFooter className="w-full grid grid-cols-2 gap-2">
              <Button className="w-full" onClick={handleCancel}>Cancel</Button>
              {/* <CoolMode ><Button type="submit" className="w-full" >Insert</Button></CoolMode> */}
              <Button type="submit" className="w-full" >Insert</Button>
              
              {/* <div className="gap-2 flex">

              <Input
                className="outline-1 rounded bg-blue-700 text-white p-1 m-auto h-fit font-bold text-lg px-4"
                type="submit"
                value="Insert"
              />
            </div> */}
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsertPost;
