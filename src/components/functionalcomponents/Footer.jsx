import fb from "../functionalcomponents/fbicon.png"
import linked from "../functionalcomponents/linkedin.png"
import twit from "../functionalcomponents/twitter.png"
import git from "../functionalcomponents/git.png"
import wapp from "../functionalcomponents/whatsapp.png"
const Footer = () =>{
    return(
        <div className="footer">
        <footer>
            <h4 className="two">Connect With Us</h4>
            <img src={fb} className="img"></img>
            <img src={wapp} className="img"></img>
            <img src={linked} className="img"></img>
            <img src={git} className="img"></img>
            <img src={twit} className="img"></img>
        </footer>
        </div>
        
    )
}
export default Footer