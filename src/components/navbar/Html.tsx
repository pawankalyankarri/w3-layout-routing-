import { Outlet } from "react-router-dom";
import SidebarLang from "../sidebarforlang/SidebarLang";
import { HtmlSidebarOptions } from "../javascriptcomponents/JsSidebarDetails";

const Html = () => {
    return (
        <div className="grid w-full h-full grid-cols-2 sm:grid-cols-[auto_1fr]">
            <div className=""> <SidebarLang data  = {HtmlSidebarOptions}/></div>
            <div><Outlet/></div>
        </div>
    )
}

export default Html;