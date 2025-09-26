import { Outlet, useLocation } from "react-router-dom";
import SidebarLang from "../sidebarforlang/SidebarLang";
import { HtmlSidebarOptions } from "../javascriptcomponents/JsSidebarDetails";
import { Sidebar } from "../ui/sidebar";
import SidebarPage from "../sidebar/SidebarPage";

const Html = () => {
    const location = useLocation()
    return (
        <div className="grid w-full h-full ">
            {/* <div className=""> <SidebarPage /></div> */}
            {/* <div className=""> <SidebarLang data  = {HtmlSidebarOptions}/></div> */}
            {location.pathname === '/html' && <div className=" flex justify-center items-center font-bold font-serif">This is HTML Page</div>}
            <div><Outlet/></div>
        </div>
        // <SidebarPage/>
    )
}

export default Html;