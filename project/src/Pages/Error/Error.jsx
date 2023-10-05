import "./Error.css";
import oops from '../../img/oops.gif';

export default function Error() {
    return (
        <div className="Error">
            <div className="container">
                <h1>Oops, this page dosen't exist</h1>
                <img src={oops} alt="oops" />
            </div>
        </div>
    )
}