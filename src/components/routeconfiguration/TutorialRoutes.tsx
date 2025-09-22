import Main from "../body/Main";
import JavaScript from "../navbar/JavaScript";
import Html from "../navbar/Html";
import React from "../navbar/React";
import {
  HtmlSidebarOptions,
  JsSidebarOptions,
  ReactSidebarOptions,
} from "../javascriptcomponents/JsSidebarDetails";
import JsBody from "../javascriptcomponents/JsBody";

const TutorialRoutesArr = [
  { index: true, element: <Main /> },
  {
    path: "js",
    element: <JavaScript />,
    children: JsSidebarOptions.map((item) => {
      return { path: `:${item.replace(" ", "_")}`, element: <JsBody /> };
    }),
  },
  {
    path: "html",
    element: <Html />,
    children: HtmlSidebarOptions.map((item) => {
      return { path: `:${item.replace(" ", "_")}`, element: <JsBody /> };
    }),
  },
  {
    path: "react",
    element: <React />,
    children: ReactSidebarOptions.map((item) => {
      return { path: `:${item.replace(" ", "_")}`, element: <JsBody /> };
    }),
  },
];

export default TutorialRoutesArr;
