import { NavLink } from "react-router-dom"

type DataProps = {
    data : string[],
}
const SidebarLang = ({data}:DataProps) => {
    return(
        <div className="">
            <ul className="bg-violet-400 overflow-y-auto sm:h-[29rem] scroll-smooth">
                {data.map((item,idx)=>{
               return( 
                <li key={idx}><NavLink to={item.replace(' ','_')}>{item}</NavLink></li>
               )
            })}
            </ul>
        </div>
    )
}

export default SidebarLang;