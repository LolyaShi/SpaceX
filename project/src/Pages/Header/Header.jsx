import './Header.css';
import logo from "../../img/logo.svg"

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul className="top__menu">
                    <li key={1}><a href="">Falcon 9</a></li>
                    <li key={2}><a href="">Falcon Heavy</a></li>
                    <li key={3}><a href="">Dragon</a></li>
                    <li key={4}><a href="">Updates</a></li>
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