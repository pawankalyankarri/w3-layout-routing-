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
    <div className=" w-full bg-green-100">
      {/* <ul className="flex justify-evenly p-5">
            <li><NavLink to="tutorial">Tutorial</NavLink></li>
            <li><NavLink to="reference">Reference</NavLink></li>
            <li><NavLink to="exercises">Exercises</NavLink></li>
            <li><NavLink to="certificates">Certificates</NavLink></li>
        </ul>
        <ul className="flex justify-evenly p-5 bg-amber-200">
            <li><NavLink to="js">Java script</NavLink></li>
            <li><NavLink to="react">React</NavLink></li>
            <li><NavLink to="html">HTML</NavLink></li>
            <li><NavLink to='employees'>Employees</NavLink></li>
            <li><NavLink to="posts">Posts</NavLink></li>
        </ul> */}
      <NavigationMenu className="w-full py-5 m-auto">
        <NavigationMenuList className="flex justify-around w-full font-serif font-bold">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">Tutorials</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4 text-center">
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
                    <NavLink to='employees'>Employees</NavLink>
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
      {/* second navbar */}
      {/* <NavigationMenu className="w-full py-5 m-auto">
        <NavigationMenuList className="flex justify-around w-full font-serif font-bold">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to="js">Java script</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to="react">React</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to="html">HTML</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to="employees">Employees</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to="posts">Posts</NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
    </div>
  );
};
export default Header;
