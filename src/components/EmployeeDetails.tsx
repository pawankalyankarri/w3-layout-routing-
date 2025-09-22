import { useEffect, useState } from "react";
import type { Emps } from "./Employees";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import EmpData from "./EmpData";


const EmployeeDetails = () => {
    let {data,setData} = EmpData()
    let params = useParams()
    let navigate = useNavigate()
    // console.log(params)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(res=>setData(res.data)).catch(err=>console.log(err))
    },[])
    // let reqData:Emps | undefined = data.find(item => item.id === Number(params.id))
    // console.log(reqData)

    function handleDelete(id:number):void{
        setData(data.filter(item=>item.id !== id))
        navigate("/employees")
    }
    return(
        <div>
            <div className="border p-5 m-4 flex justify-between">
               <div>
                 <p>{data?.username}</p>
                <p>{data?.email}</p>
                <p>{data?.phone}</p>
               </div>
               <div>
                <button onClick={()=>handleDelete(Number(params.id))} >delete</button>
               </div>
            </div>
        </div>
    )
}
export default EmployeeDetails;