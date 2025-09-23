import type { Emps } from "./EmpData";

import { useNavigate, useParams } from "react-router-dom";
import EmpData from "./EmpData";


const EmployeeDetails = () => {
    let {info,setInfo} = EmpData()

    let params = useParams()
    let navigate = useNavigate()
    console.log(params)

    // useEffect(()=>{
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(res=>setData(res.data)).catch(err=>console.log(err))
    // },[])
    let reqData:Emps | undefined = info.find(item => item.id === Number(params.id))
    console.log(reqData)

    function handleDelete(id:number):void{
        setInfo(info.filter(item=>item.id !== id))
        navigate("/employees")
    }

   
    return(
        <div>
            
            <div className="border p-5 m-4 flex justify-between">
               <div>
                 <p>{reqData?.username}</p>
                <p>{reqData?.email}</p>
                <p>{reqData?.phone}</p>
               </div>
               <div>
                <br />
                <button onClick={()=>handleDelete(Number(params.id))} className="cursor-pointer px-2 p-1 bg-black text-white font-bold rounded" >delete</button>
                
               </div>
            </div>
        </div>
    )
}
export default EmployeeDetails;