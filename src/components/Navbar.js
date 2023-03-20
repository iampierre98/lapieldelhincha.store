import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import searchIcon from "../img/searchIcon.png"

function Navbar() {

    return(
        <nav className="nav-top">
            <ul>
                <li><Link to="/brands">Marcas</Link></li>
                <li><Link to="/countries">Países</Link></li>
                <li><Link to="/player">Versión Jugador</Link></li>
                <li><Link to="/longsleeve">Manga Larga</Link></li>
                <li><Link to="/retro">Retro</Link></li>
                <li><Link to="/woman">Mujer</Link></li>
                <li><Link to="/kids">Niños</Link></li>
            </ul>
            <ul>
                <input className="searchBar" type="text" placeholder="Buscar"></input>
                <button type="submit" className="searchButton">
                    <img src={searchIcon} alt="🔎" className="searchIcon"></img>
                </button>
            </ul>
        </nav>
    )
}

export default Navbar