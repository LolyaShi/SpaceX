import './Header.css';
import logo from "../../img/logo.svg"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul className="top__menu">
                    <li key={1}><Link to="/Falcon ">Falcon 9</Link></li>
                    <li key={2}><Link to="/Main">Falcon Heavy</Link></li>
                    <li key={3}><Link to="/Dragon">Dragon</Link></li>
                    <li key={4}><Link to="/Updates">Updates</Link></li>
                </ul>
            </nav>
            <div className="side__nav">
                 <ul className="side__menu">
                    <li key={1}><a href="">About</a></li>
                    <li key={2}><a href="">Gallery</a></li>
                    <li key={3}><a href="">Shop</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;