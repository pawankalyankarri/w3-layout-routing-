import axios from "axios";
import { useEffect, useState } from "react";

import ChildEmployee from "./ChildEmployee";
import EmpData from "./EmpData";
export type Emps = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city:string,
      zipcode: number,
      geo: {
        lat: number,
        lng: number
      }
    },
    phone: number,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string,
    }
  }

const Employees = () => {
    // let {data,setData}:{data : Emps[] , setData:(data: Emps[] | ((prev: Emps[]) => Emps[])) => void} = EmpData()
    let [data,setData] = useState<Emps[]>([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setData(res.data)).catch(err=>console.log(err))
    },[])
    return(
        <div>
            <table className="table-auto border m-auto my-2 border-collapse border-spacing-2">
                
                <thead className="">
                    <tr>
                    <th className="border px-2 py-1">UserName</th>
                    <th className="border px-2 py-1">Email</th>
                    <th className="border px-2 py-1">Phone</th>
                    </tr>
                </thead>
                
                <tbody>
                    {data.map(item=><ChildEmployee data = {data} setData = {setData}  key={item.id} emp={item}/>)}
                </tbody>
            </table>
        </div>
    )
}
export default Employees;