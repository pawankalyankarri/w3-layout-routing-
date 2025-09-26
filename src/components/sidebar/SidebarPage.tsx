import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import { Fragment } from "react/jsx-runtime";

const SidebarPage = () => {
  const location = useLocation();
  // console.log(location.pathname);
  let arr = location.pathname.split("/").filter((i) => i);
  // console.log(arr);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {arr.map((item, idx) => {
                  const isLast = idx === arr.length - 1;
                  const path = `/${arr.slice(0, idx + 1).join("/")}`;
                  return (
                    <BreadcrumbItem key={idx}>
                      {isLast ? (
                        <BreadcrumbPage className="capitalize">{item}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild className="capitalize">
                          <Link to={path}>{item}</Link>
                        </BreadcrumbLink>
                      )}
                      {!isLast && (
                        <span className="text-lg">»</span>
                      )}
                    </BreadcrumbItem>
                  );
                })}

                {/* <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem> */}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="w-full sm:mx-0  mx-1">
          <Header />
        </div>
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div> */}
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default SidebarPage;
