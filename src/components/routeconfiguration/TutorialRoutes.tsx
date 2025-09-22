import Main from "../body/Main";
import JavaScript from "../navbar/JavaScript";
import Html from "../navbar/Html";
import React from "../navbar/React";

const TutorialRoutesArr = [
    {index : true , element : <Main/>},
    {path : 'js', element : <JavaScript/>},
    {path : 'html', element : <Html/> },
    {path :'react', element : <React/> },
]

export default TutorialRoutesArr;