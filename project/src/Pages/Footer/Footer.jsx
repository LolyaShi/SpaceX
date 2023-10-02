import logo from "../../img/logo.svg";
import "./Footer.css";

function Footer() {
    return (
        <div className="container">
            <div className="Footer">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <li><a href="">Twitter</a></li>
                    <li><a href="https://www.youtube.com/" target="blanck">Youtube</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Flickr</a></li>
                    <li><a href="">LinkedIn</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Policy</a></li>
                </ul>
                <p>For additional questions, contact rideshare@spacex.com</p>
                <button>Contact us</button>
            </div>
        </div>
    )
}

export default Footer;