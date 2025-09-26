import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    
    <NavigationMenu className="sm:m-auto">

      <NavigationMenuList className=" font-serif sm:font-bold">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="sm:font-bold">
            Tutorials
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid sm:w-[200px] gap-4  text-center">
              <li className="font-bold font-serif">
                <NavigationMenuLink asChild>
                  <NavLink to="js">Java script</NavLink>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <NavLink to="react">React</NavLink>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <NavLink to="html">HTML</NavLink>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <NavLink to="employees">Employees</NavLink>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <NavLink to="posts">Posts</NavLink>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink to="reference">Reference</NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink to="exercises">Exercises</NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink to="certificates">Certificates</NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    
  );
};
export default Header;
