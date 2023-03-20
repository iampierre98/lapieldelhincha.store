import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Footbar() {
    return(
        <nav className="nav-bottom">
            <ul>
                <li><a href="#top">↑ Subir ↑</a></li>
                <li><Link to="https://www.instagram.com/lapieldelhincha_peru_/" target="_blank">Instagram</Link></li>
                <a aria-label="Chat on WhatsApp" href="https://wa.me/51954781501">
                    <img className="footbarwsp" alt="Chat on WhatsApp" src={require("../img/wspgreen.png")} />
                </a>
            </ul>
        </nav>
    )
}

export default Footbar;