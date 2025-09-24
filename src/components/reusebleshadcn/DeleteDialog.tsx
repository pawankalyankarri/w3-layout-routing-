import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { PostType } from "../posts/PostsPage";

type ChildProps = {
    getChild :(id:number)=>void,
    item : PostType
}

const DeleteDialog = ({ getChild,item }: ChildProps ) => {

  function handleDelete(id:number){
            getChild(id)
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger className="px-3 p-1 bg-red-500 text-white font-bold rounded cursor-pointer" >Delete</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className=" font-mono text-md">
            
            <strong className="font-bold">userId</strong> : {item.userId} <br />
            <strong className="font-bold">body</strong> : {item.body} <br />
            <strong className="font-bold">title</strong> : {item.title} <br />
            if you click Continue this data will deleted.


          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=>handleDelete(item.id)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteDialog;
