import './SocialLinks.scss'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://github.com/nickcordy"><FaGithubSquare className="icon" size={50} /></a>
            <a href="https://www.linkedin.com/in/nick-cordy"><FaLinkedin className="icon" size={50} /></a>
        </div>
    )
}