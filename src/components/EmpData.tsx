import axios from "axios"
import { useEffect, useState } from "react"

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
const EmpData = () =>{
    let [data,setData] = useState<Emps[]>([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setData(res.data)).catch(err=>console.log(err))
    },[])
    return {data,setData}
}
export default EmpData;


