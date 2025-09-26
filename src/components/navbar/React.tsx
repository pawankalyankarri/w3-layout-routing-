import { Outlet, useLocation } from "react-router-dom";
import SidebarLang from "../sidebarforlang/SidebarLang";
import { ReactSidebarOptions } from "../javascriptcomponents/JsSidebarDetails";
import { TypingAnimation } from "../ui/typing-animation";

const React = () => {
    const location = useLocation()
    return (
        <div className="grid w-full h-full place-content-center ">
            {/* <div className=""> <SidebarLang data  = {ReactSidebarOptions}/></div> */}
            {location.pathname === '/react' && <TypingAnimation startOnView={true} className=" flex justify-center items-center font-bold font-serif">This is React Page</TypingAnimation>}
            <div><Outlet/></div>
        </div>
    )
}

export default React;