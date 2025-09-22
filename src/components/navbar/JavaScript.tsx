import { Outlet } from "react-router-dom";
import {  JsSidebarOptions } from "../javascriptcomponents/JsSidebarDetails";
import SidebarLang from "../sidebarforlang/SidebarLang";

const JavaScript = () => {
    
    return (
        <div className="grid w-full h-full grid-cols-2 sm:grid-cols-[auto_1fr]">
            <div className=""> <SidebarLang data  = {JsSidebarOptions}/></div>
            <div><Outlet/></div>
            
        </div>
    )
}

export default JavaScript;