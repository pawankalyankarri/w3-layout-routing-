import axios from "axios";
import { useEffect, useState } from "react";
import type { EmpContextType } from "./EmpData";
import ChildEmployee from "./ChildEmployee";
import EmpData from "./EmpData";
import { NavLink } from "react-router-dom";
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
          {info.map((item) => {
            return (
              <tr key={item.id} className="border">
                <td className="border  px-2">{item.username}</td>
                <td className="border  px-2">{item.email}</td>
                <td className="border  px-2">{item.phone}</td>
                <td className="border  p-2">
                  <NavLink to={`/employees/${item.id}`} className="px-2 p-1 bg-green-500 text-white font-bold rounded" >edit</NavLink>
                </td>
              </tr>
            );
          })}
          {/* {data.map(item=><ChildEmployee data = {data} setData = {setData}  key={item.id} emp={item}/>)} */}
        </tbody>
      </table>
    </div>
  );
};
export default Employees;
