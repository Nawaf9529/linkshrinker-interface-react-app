import {Link} from "react-router-dom";
import About from "./About"
import "./Header.css";
const Header = ()=>{
    return(
    <>
    <ul>
        <li><Link className="headerbtn" to="/">Home</Link></li>
        <li><Link className="headerbtn" to="/about">About us</Link></li>
    </ul>
    </>
    );
}

export default Header;