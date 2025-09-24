import axios from "axios";
import { useEffect, useState } from "react";
import type { EmpContextType } from "./EmpData";
import ChildEmployee from "./ChildEmployee";
import EmpData from "./EmpData";
import { NavLink } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button";
// export type Emps = {
//     id: number,
//     name: string,
//     username: string,
//     email: string,
//     address: {
//       street: string,
//       suite: string,
//       city:string,
//       zipcode: number,
//       geo: {
//         lat: number,
//         lng: number
//       }
//     },
//     phone: number,
//     website: string,
//     company: {
//       name: string,
//       catchPhrase: string,
//       bs: string,
//     }
//   }

const Employees = () => {
  let { info, setInfo } = EmpData();
  // let [data,setData] = useState<Emps[]>([])
  useEffect(() => {
    if (info.length === 0) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setInfo(res.data))
        .catch((err) => console.log(err));
    }
  }, [info, setInfo]);
  return (
    <div>{
      info.length === 0 ? (<div className="flex justify-center"><strong>Loading...</strong></div>):
     
      <Table className="table-auto border w-[90%] m-auto my-2 border-collapse border-spacing-2">
        <TableHeader className="">
          <TableRow className="font-bold">
            <TableHead >UserName</TableHead>
            <TableHead >Email</TableHead>
            <TableHead >Phone</TableHead>
            <TableHead >Modify Here</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="font-mono">
          {info.map((item) => {
            return (
              <TableRow key={item.id} className="border">
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell >
                  <NavLink to={`/employees/${item.id}`} ><Button>Edit</Button></NavLink>
                </TableCell>
              </TableRow>
            );
          })}
          {/* {data.map(item=><ChildEmployee data = {data} setData = {setData}  key={item.id} emp={item}/>)} */}
        </TableBody>
        
      </Table> }
    </div>
  );
};
export default Employees;
