"use client";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "JavaScript",
      url: "js",
      icon: SquareTerminal,
      isActive: false,
      // items: [
      //   {
      //     title: "History",
      //     url: "#",
      //   },
      //   {
      //     title: "Starred",
      //     url: "#",
      //   },
      //   {
      //     title: "Settings",
      //     url: "#",
      //   },
      // ],
      items: [
        { title: "JS Tutorial", url: "/js/tutorial" },
        { title: "JS Syntax", url: "/js/syntax" },
        { title: "JS Variables", url: "/js/variables" },
        { title: "JS Operators", url: "/js/operators" },
        { title: "JS If Conditions", url: "/js/if-conditions" },
        { title: "JS Loops", url: "/js/loops" },
        { title: "JS Strings", url: "/js/strings" },
        { title: "JS Numbers", url: "/js/numbers" },
        { title: "JS Functions", url: "/js/functions" },
        { title: "JS Objects", url: "/js/objects" },
        { title: "JS Dates", url: "/js/dates" },
        { title: "JS Arrays", url: "/js/arrays" },
        { title: "JS Sets", url: "/js/sets" },
        { title: "JS Maps", url: "/js/maps" },
        { title: "JS Math", url: "/js/math" },
        { title: "JS RegExp", url: "/js/regexp" },
        { title: "JS Data Types", url: "/js/data-types" },
        { title: "JS Errors", url: "/js/errors" },
        { title: "JS Debugging", url: "/js/debugging" },
        { title: "JS Events", url: "/js/events" },
        { title: "JS Programming", url: "/js/programming" },
        { title: "JS References", url: "/js/references" },
        { title: "JS UTF-8 Characters", url: "/js/utf-8-characters" },
        { title: "JS Advanced", url: "/js/advanced" },
        { title: "JS Versions", url: "/js/versions" },
        { title: "JS Classes", url: "/js/classes" },
        { title: "JS Iterations", url: "/js/iterations" },
        { title: "JS Promises", url: "/js/promises" },
        { title: "JS Modules", url: "/js/modules" },
        { title: "JS HTML DOM", url: "/js/html-dom" },
        { title: "JS Windows", url: "/js/windows" },
        { title: "JS Web API", url: "/js/web-api" },
        { title: "JS AJAX", url: "/js/ajax" },
        { title: "JS JSON", url: "/js/json" },
        { title: "JS jQuery", url: "/js/jquery" },
        { title: "JS Graphics", url: "/js/graphics" },
        { title: "JS Examples", url: "/js/examples" },
      ],
    },
    {
      title: "HTML",
      url: "/html",
      icon: Bot,
      // items: [
      //   {
      //     title: "Genesis",
      //     url: "#",
      //   },
      //   {
      //     title: "Explorer",
      //     url: "#",
      //   },
      //   {
      //     title: "Quantum",
      //     url: "#",
      //   },
      // ],
      items: [
        { title: "HTML HOME", url: "/html/home" },
        { title: "HTML Introduction", url: "/html/introduction" },
        { title: "HTML Editors", url: "/html/editors" },
        { title: "HTML Basic", url: "/html/basic" },
        { title: "HTML Elements", url: "/html/elements" },
        { title: "HTML Attributes", url: "/html/attributes" },
        { title: "HTML Headings", url: "/html/headings" },
        { title: "HTML Paragraphs", url: "/html/paragraphs" },
        { title: "HTML Styles", url: "/html/styles" },
        { title: "HTML Formatting", url: "/html/formatting" },
        { title: "HTML Quotations", url: "/html/quotations" },
        { title: "HTML Comments", url: "/html/comments" },
        { title: "HTML Colors", url: "/html/colors" },
        { title: "HTML CSS", url: "/html/css" },
        { title: "HTML Links", url: "/html/links" },
        { title: "HTML Images", url: "/html/images" },
        { title: "HTML Favicon", url: "/html/favicon" },
        { title: "HTML Page Title", url: "/html/page-title" },
        { title: "HTML Tables", url: "/html/tables" },
        { title: "HTML Lists", url: "/html/lists" },
        { title: "HTML Block & Inline", url: "/html/block-inline" },
        { title: "HTML Div", url: "/html/div" },
        { title: "HTML Classes", url: "/html/classes" },
        { title: "HTML Id", url: "/html/id" },
        { title: "HTML Iframes", url: "/html/iframes" },
        { title: "HTML JavaScript", url: "/html/javascript" },
        { title: "HTML File Paths", url: "/html/file-paths" },
        { title: "HTML Head", url: "/html/head" },
        { title: "HTML Layout", url: "/html/layout" },
        { title: "HTML Responsive", url: "/html/responsive" },
        { title: "HTML Computercode", url: "/html/computercode" },
        { title: "HTML Semantics", url: "/html/semantics" },
        { title: "HTML Style Guide", url: "/html/style-guide" },
        { title: "HTML Entities", url: "/html/entities" },
        { title: "HTML Symbols", url: "/html/symbols" },
        { title: "HTML Emojis", url: "/html/emojis" },
        { title: "HTML Charsets", url: "/html/charsets" },
        { title: "HTML URL Encode", url: "/html/url-encode" },
        { title: "HTML vs. XHTML", url: "/html/vs-xhtml" },

        { title: "HTML Forms", url: "/html/forms" },
        { title: "HTML Form Attributes", url: "/html/form-attributes" },
        { title: "HTML Form Elements", url: "/html/form-elements" },
        { title: "HTML Input Types", url: "/html/input-types" },
        { title: "HTML Input Attributes", url: "/html/input-attributes" },

        { title: "HTML Graphics", url: "/html/graphics" },
        { title: "HTML Canvas", url: "/html/canvas" },
        { title: "HTML SVG", url: "/html/svg" },

        { title: "HTML Media", url: "/html/media" },
        { title: "HTML Video", url: "/html/video" },
        { title: "HTML Audio", url: "/html/audio" },
        { title: "HTML Plug-ins", url: "/html/plug-ins" },
        { title: "HTML YouTube", url: "/html/youtube" },

        { title: "HTML APIs", url: "/html/apis" },
        { title: "HTML Web APIs", url: "/html/web-apis" },
        { title: "HTML Geolocation", url: "/html/geolocation" },
        { title: "HTML Drag and Drop", url: "/html/drag-drop" },
        { title: "HTML Web Storage", url: "/html/web-storage" },
        { title: "HTML Web Workers", url: "/html/web-workers" },
        { title: "HTML SSE", url: "/html/sse" },

        { title: "HTML Examples", url: "/html/examples" },
        { title: "HTML Editor", url: "/html/editor" },
        { title: "HTML Quiz", url: "/html/quiz" },
        { title: "HTML Exercises", url: "/html/exercises" },
        { title: "HTML Website", url: "/html/website" },
        { title: "HTML Syllabus", url: "/html/syllabus" },
        { title: "HTML Study Plan", url: "/html/study-plan" },
        { title: "HTML Interview Prep", url: "/html/interview-prep" },
        { title: "HTML Bootcamp", url: "/html/bootcamp" },
        { title: "HTML Certificate", url: "/html/certificate" },
        { title: "HTML Summary", url: "/html/summary" },
        { title: "HTML Accessibility", url: "/html/accessibility" },

        { title: "HTML References", url: "/html/references" },
        { title: "HTML Tag List", url: "/html/tag-list" },
        { title: "HTML Global Attributes", url: "/html/global-attributes" },
        { title: "HTML Browser Support", url: "/html/browser-support" },
        { title: "HTML Events", url: "/html/events" },
        { title: "HTML Doctypes", url: "/html/doctypes" },
        { title: "HTML Character Sets", url: "/html/character-sets" },
        { title: "HTML Lang Codes", url: "/html/lang-codes" },
      ],
    },
    {
      title: "React",
      url: "/react",
      icon: BookOpen,
      // items: [
      //   {
      //     title: "Introduction",
      //     url: "#",
      //   },
      //   {
      //     title: "Get Started",
      //     url: "#",
      //   },
      //   {
      //     title: "Tutorials",
      //     url: "#",
      //   },
      //   {
      //     title: "Changelog",
      //     url: "#",
      //   },
      // ],
      items: [
        { title: "React Home", url: "/react/home" },
        { title: "React Intro", url: "/react/intro" },
        { title: "React Get Started", url: "/react/get-started" },
        { title: "React First App", url: "/react/first-app" },
        { title: "React Render HTML", url: "/react/render-html" },
        { title: "React Upgrade", url: "/react/upgrade" },
        { title: "React ES6", url: "/react/es6" },
        { title: "React JSX Intro", url: "/react/jsx-intro" },
        { title: "React JSX Expressions", url: "/react/jsx-expressions" },
        { title: "React JSX Attributes", url: "/react/jsx-attributes" },
        { title: "React JSX If Statements", url: "/react/jsx-if-statements" },
        { title: "React Components", url: "/react/components" },
        { title: "React Class", url: "/react/class" },
        { title: "React Props", url: "/react/props" },
        {
          title: "React Props Destructuring",
          url: "/react/props-destructuring",
        },
        { title: "React Props Children", url: "/react/props-children" },
        { title: "React Events", url: "/react/events" },
        { title: "React Conditionals", url: "/react/conditionals" },
        { title: "React Lists", url: "/react/lists" },
        { title: "React Forms", url: "/react/forms" },
        { title: "React Forms Submit", url: "/react/forms-submit" },
        { title: "React Textarea", url: "/react/textarea" },
        { title: "React Select", url: "/react/select" },
        { title: "React Multiple Inputs", url: "/react/multiple-inputs" },
        { title: "React Checkbox", url: "/react/checkbox" },
        { title: "React Radio", url: "/react/radio" },
        { title: "React Portals", url: "/react/portals" },
        { title: "React Suspense", url: "/react/suspense" },
        { title: "React CSS Styling", url: "/react/css-styling" },
        { title: "React CSS Modules", url: "/react/css-modules" },
        { title: "React CSS-in-JS", url: "/react/css-in-js" },
        { title: "React Router", url: "/react/router" },
        { title: "React Transitions", url: "/react/transitions" },
        { title: "React Forward Ref", url: "/react/forward-ref" },
        { title: "React HOC", url: "/react/hoc" },
        { title: "React Sass", url: "/react/sass" },

        { title: "React Hooks", url: "/react/hooks" },
        { title: "React useState", url: "/react/use-state" },
        { title: "React useEffect", url: "/react/use-effect" },
        { title: "React useContext", url: "/react/use-context" },
        { title: "React useRef", url: "/react/use-ref" },
        { title: "React useReducer", url: "/react/use-reducer" },
        { title: "React useCallback", url: "/react/use-callback" },
        { title: "React useMemo", url: "/react/use-memo" },
        { title: "React Custom Hooks", url: "/react/custom-hooks" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Posts",
      url: "/posts",
      icon: PieChart,
    },
    {
      name: "Employees",
      url: "/employees",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="font-serif">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
        <AnimatedThemeToggler/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
