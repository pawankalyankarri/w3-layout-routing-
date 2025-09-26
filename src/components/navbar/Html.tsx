import { Outlet, useLocation } from "react-router-dom";
import SidebarLang from "../sidebarforlang/SidebarLang";
import { HtmlSidebarOptions } from "../javascriptcomponents/JsSidebarDetails";
import { Sidebar } from "../ui/sidebar";
import SidebarPage from "../sidebar/SidebarPage";
import { TypingAnimation } from "../ui/typing-animation";

const Html = () => {
    const location = useLocation()
    return (
        <div className="grid w-full h-full place-content-center ">
            {/* <div className=""> <SidebarPage /></div> */}
            {/* <div className=""> <SidebarLang data  = {HtmlSidebarOptions}/></div> */}
            {location.pathname === '/html' && <TypingAnimation startOnView={true} className=" flex justify-center items-center font-bold font-serif">This is HTML Page</TypingAnimation>}
            <div><Outlet/></div>
        </div>
        // <SidebarPage/>
    )
}

export default Html;