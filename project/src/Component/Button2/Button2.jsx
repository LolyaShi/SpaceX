import { Link } from "react-router-dom";

export default function Button({ text, next }) {

    function active() {
        
    }

    return (
        <div className="Button">
            <Link to={next} className="btn" >{text}
                <span className="hover">
                    <span className="hover__text">{text}</span>
                </span>
            </Link>
        </div>
    )
}