import { Outlet, useLocation } from "react-router-dom";
import {  JsSidebarOptions } from "../javascriptcomponents/JsSidebarDetails";
import SidebarLang from "../sidebarforlang/SidebarLang";
import { TypingAnimation } from "../ui/typing-animation";

const JavaScript = () => {
    const location = useLocation()
    return (
        <div className="grid w-full h-full place-content-center ">
            {/* <div className=""> <SidebarLang data  = {JsSidebarOptions}/></div> */}
            {location.pathname === '/js' && <TypingAnimation startOnView={true} className=" flex justify-center items-center font-bold font-serif">This is JavaScript Page</TypingAnimation>}
            <div><Outlet/></div>
            
        </div>
    )
}

export default JavaScript;