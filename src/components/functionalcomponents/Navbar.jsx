import "../../css/Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../functionalcomponents/logo.png"
const Navbar = () => {
    return (
        <div className="main">
         
            <ol>
            <img src={logo} className="logo"></img>
            <li ><Link to="home">Home</Link></li>
            <li ><Link to="about">About us</Link></li>
            <li ><Link to="contact">Contact</Link></li>
            <li ><Link to="login">Login</Link></li>
        </ol>
        </div>


    )
}
export default Navbar