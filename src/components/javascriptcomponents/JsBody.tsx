import { useParams } from "react-router-dom";

const JsBody = () => {
    const params = useParams<string>()
    // console.log(Object.values(params)[0])
    return(
        <div>
            <div>{Object.values(params)[0]?.replace("_"," ")}</div>
        </div>
    )
}
export default JsBody;