import { Outlet, useLocation } from "react-router-dom";
import {  JsSidebarOptions } from "../javascriptcomponents/JsSidebarDetails";
import SidebarLang from "../sidebarforlang/SidebarLang";

const JavaScript = () => {
    const location = useLocation()
    return (
        <div className="grid w-full h-full ">
            {/* <div className=""> <SidebarLang data  = {JsSidebarOptions}/></div> */}
            {location.pathname === '/js' && <div className=" flex justify-center items-center font-bold font-serif">This is JavaScript Page</div>}
            <div><Outlet/></div>
            
        </div>
    )
}

export default JavaScript;