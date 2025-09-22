import { Outlet } from "react-router-dom";
import SidebarLang from "../sidebarforlang/SidebarLang";
import { ReactSidebarOptions } from "../javascriptcomponents/JsSidebarDetails";

const React = () => {
    return (
        <div className="grid w-full h-full grid-cols-2 sm:grid-cols-[auto_1fr]">
            <div className=""> <SidebarLang data  = {ReactSidebarOptions}/></div>
            <div><Outlet/></div>
        </div>
    )
}

export default React;