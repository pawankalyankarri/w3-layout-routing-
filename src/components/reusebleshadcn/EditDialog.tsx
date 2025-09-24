import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { PostType } from "../posts/PostsPage"
import axios from "axios"

const EditDialog = () => {
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
      JSON.stringify(post)
    ).then(res=>console.log(res)).catch(err=>console.log(err));
    navigate('/posts')
  }
  function handleCancel(){
    navigate("/posts")
  }
  return (
    <Dialog defaultOpen>
      
        {/* <DialogTrigger asChild>
          <Button variant="outline">Edit Post</Button>
        </DialogTrigger> */}
        <DialogContent className="sm:max-w-[425px]" onOpenAutoFocus={(e)=>e.preventDefault()}>
          <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to Post here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="userid">UserId</Label>
              <Input id="userid" type="number" max={5000} min={0} name="userId" value={post.userId} onChange={handleChange} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="body">Body</Label>
              <Input id="body" name="body" value={post.body} onChange={handleChange} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={post.title} onChange={handleChange}  />
            </div>
          </div>
          <DialogFooter className="my-2">
            <DialogClose asChild>
              <Button variant="outline" onClick={handleCancel}>Cancel</Button>
            </DialogClose>
            <Button type="submit" >Save changes</Button>
          </DialogFooter>
          </form>
        </DialogContent>
      
    </Dialog>
  )
}
export default EditDialog;
