import { NavLink } from 'react-router-dom';
import type {Emps}  from './EmpData';

type Emp = {
    emp :Emps
    data : Emps[]
    setData : (data: Emps[] | ((prev: Emps[]) => Emps[])) => void;
}

const ChildEmployee = ({emp,data,setData}:Emp) => {
    function handleDelete(id:number){
        setData(data.filter(item=>item.id !== id ))
    }
    return(
        <tr>
            <td className="border px-2 py-1">{emp.username}</td>
            <td className="border px-2 py-1">{emp.email}</td>
            <td className="border px-2 py-1">{emp.phone}</td>
            <td className="border px-2 py-1"><NavLink to={`/employees/${emp.id}`}>edit</NavLink></td>
            <td className="border px-2 py-1"><button onClick={()=>handleDelete(emp.id)}>delete</button></td>
        </tr>
    )
}

export default ChildEmployee;