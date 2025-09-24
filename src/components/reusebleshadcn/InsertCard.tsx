import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InsertCard = () => {
  return (
    <div className="flex h-full items-center justify-center ">
    <Card className="w-full max-w-sm  ">
      <CardHeader>
        <CardTitle>Insert New Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="font-serif">
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="userid">UserId</Label>
              <Input
                id="userid"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col">
              <div className="grid gap-2 ">
                <Label htmlFor="password">Title</Label>
                <Input id="title" type="title" required />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="grid gap-2 ">
                <Label htmlFor="password">Body</Label>
                <Input id="body" type="body" required />
              </div>
            </div>
          </div>
          <CardFooter className="flex-col gap-2 my-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
    </div>
  );
};

export default InsertCard;
