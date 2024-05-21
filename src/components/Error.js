import { useRouteError } from "react-router-dom";

const ErrorComponent = ()=>{
    const error = useRouteError();
    console.log(error);
return (
    <div> 
        <h1>Oops, something went wrong...</h1>
        <h3>{error.status}:{error.statusText}</h3>
    </div>
)
};
export default ErrorComponent;