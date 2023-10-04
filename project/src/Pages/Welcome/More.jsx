import { useLoaderData } from "react-router-dom";
import "./Welcome.css";

export default function More() {
    const id = useLoaderData();
    
    return (
        
        <div className="More">
            <div className="container">
                <h3>{id.subtitle }</h3>
                <h1>{id.title}</h1>
            </div>
         </div>
        
    )
}