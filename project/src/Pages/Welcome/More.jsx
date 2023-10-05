import { Link, useLoaderData } from "react-router-dom";
import "./Welcome.css";
import Button from "../../Component/Button/Button";

export default function More() {
    const id = useLoaderData();
    
    return (
        
        <div className="More">
            <div className="container">
                <div className="more__body">
                    <div className="img__block">
                        <Link className="link" to="/Welcome">Back</Link>
                        <img src={id.img} alt="starlink" />
                    </div>
                    <div className="text__block">
                        <h3>{id.relese }</h3>
                        <h1>{id.title}</h1>
                        <p>{ id.about}</p>
                    </div>
                </div>
               
            </div>
         </div>
        
    )
}