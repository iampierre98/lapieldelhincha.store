import React from "react";
import { Link } from "react-router-dom";

const WorldCup = () => {

    return (
        <>
            <h2 className="subtitle">FIFA World Cup Qatar 2022</h2>
            <h3 className='subtitle'>Grupo A</h3>
            <div id="list">
                <div key="qa/0" className="product-box-mini">
                    <Link to="/countries/qa/0">
                        <div className="img-box-mini-div">
                        <img src={require(`../img/countries/qa/0.png`)}
                            className="img-box-mini" 
                            alt="qa/0.logo" 
                            loading="lazy"
                            >
                        </img>
                        </div>
                        <p className="description">Catar</p>
                    </Link>
                </div>

                <div key="ec/2" className="product-box-mini">
                    <Link to="/countries/ec/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="ec/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/ec/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Ecuador</p>
                    </Link>
                </div>

                <div key="sn/0" className="product-box-mini">
                    <Link to="/countries/sn/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="sn/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/sn/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Senegal</p>
                    </Link>
                </div>

                <div key="nl/0" className="product-box-mini">
                    <Link to="/countries/nl/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="nl/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/nl/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Países Bajos</p>
                    </Link>
                </div>
            </div>

            <h3 className='subtitle'>Grupo B</h3>
            <div id="list">
                <div key="en/0" className="product-box-mini">
                    <Link to="/countries/gb-eng/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="en/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/gb-eng/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Inglaterra</p>
                    </Link>
                </div>

                <div key="ir/2" className="product-box-mini">
                    <Link to="/countries/ir/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="ir/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/ir/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Irán</p>
                    </Link>
                </div>

                <div key="us/0" className="product-box-mini">
                    <Link to="/countries/us/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="us/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/us/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Estados Unidos</p>
                    </Link>
                </div>

                <div key="wl/0" className="product-box-mini">
                    <Link to="/countries/gb-wls/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="wl/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/gb-wls/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Gales</p>
                    </Link>
                </div>
            </div>

            <h3 className='subtitle'>Grupo C</h3>
            <div id="list">
                <div key="ar/0" className="product-box-mini">
                    <Link to="/countries/ar/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="ar/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/ar/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Argentina</p>
                    </Link>
                </div>

                <div key="sa/0" className="product-box-mini">
                    <Link to="/countries/sa/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="sa/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/sa/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Arabia Saudita</p>
                    </Link>
                </div>

                <div key="mx/0" className="product-box-mini">
                    <Link to="/countries/mx/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="mx/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/mx/0.png`)}>
                        </img>
                        </div>
                        <p className="description">México</p>
                    </Link>
                </div>

                <div key="pl/0" className="product-box-mini">
                    <Link to="/countries/pl/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="pl/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/pl/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Polonia</p>
                    </Link>
                </div>
            </div>

            <h3 className='subtitle'>Grupo D</h3>
            <div id="list">
                <div key="fr/0" className="product-box-mini">
                    <Link to="/countries/fr/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="fr/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/fr/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Francia</p>
                    </Link>
                </div>

                <div key="au/0" className="product-box-mini">
                    <Link to="/countries/au/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="au/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/au/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Australia</p>
                    </Link>
                </div>

                <div key="dk/0" className="product-box-mini">
                    <Link to="/countries/dk/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="dk/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/dk/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Dinamarca</p>
                    </Link>
                </div>

                <div key="tn/0" className="product-box-mini">
                    <Link to="/countries/tn/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="tn/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/tn/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Túnez</p>
                    </Link>
                </div>
            </div>

            <h3 className='subtitle'>Grupo E</h3>
            <div id="list">
                <div key="es/0" className="product-box-mini">
                    <Link to="/countries/es/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="es/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/es/0.png`)}>
                        </img>
                        </div>
                        <p className="description">España</p>
                    </Link>
                </div>

                <div key="cr/0" className="product-box-mini">
                    <Link to="/countries/cr/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="cr/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/cr/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Costa Rica</p>
                    </Link>
                </div>

                <div key="de/0" className="product-box-mini">
                    <Link to="/countries/de/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="de/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/de/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Alemania</p>
                    </Link>
                </div>

                <div key="jp/0" className="product-box-mini">
                    <Link to="/countries/jp/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="jp/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/jp/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Japón</p>
                    </Link>
                </div>
            </div>

            <h3 className='subtitle'>Grupo F</h3>
            <div id="list">
                <div key="be/0" className="product-box-mini">
                    <Link to="/countries/be/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="be/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/be/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Bélgica</p>
                    </Link>
                </div>

                <div key="ca/0" className="product-box-mini">
                    <Link to="/countries/ca/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="ca/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/ca/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Canadá</p>
                    </Link>
                </div>

                <div key="ma/0" className="product-box-mini">
                    <Link to="/countries/ma/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="ma/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/ma/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Marruecos</p>
                    </Link>
                </div>

                <div key="hr/0" className="product-box-mini">
                    <Link to="/countries/hr/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="hr/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/hr/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Croacia</p>
                    </Link>
                </div>
            </div>

            <h3 className='subtitle'>Grupo G</h3>
            <div id="list">
                <div key="br/0" className="product-box-mini">
                    <Link to="/countries/br/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="br/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/br/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Brasil</p>
                    </Link>
                </div>

                <div key="rs/0" className="product-box-mini">
                    <Link to="/countries/rs/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="rs/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/rs/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Serbia</p>
                    </Link>
                </div>

                <div key="ch/0" className="product-box-mini">
                    <Link to="/countries/ch/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="ch/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/ch/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Suiza</p>
                    </Link>
                </div>

                <div key="cm/0" className="product-box-mini">
                    <Link to="/countries/cm/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="cm/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/cm/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Camerún</p>
                    </Link>
                </div>
            </div>

            <h3 className='subtitle'>Grupo H</h3>
            <div id="list">
                <div key="pt/0" className="product-box-mini">
                    <Link to="/countries/pt/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="pt/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/pt/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Portugal</p>
                    </Link>
                </div>

                <div key="gh/0" className="product-box-mini">
                    <Link to="/countries/gh/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="gh/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/gh/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Ghana</p>
                    </Link>
                </div>

                <div key="uy/0" className="product-box-mini">
                    <Link to="/countries/uy/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="uy/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/uy/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Uruguay</p>
                    </Link>
                </div>

                <div key="kr/0" className="product-box-mini">
                    <Link to="/countries/kr/0">
                        <div className="img-box-mini-div">
                        <img
                            className="img-box-mini" 
                            alt="kr/0.logo" 
                            loading="lazy"
                            src={require(`../img/countries/kr/0.png`)}>
                        </img>
                        </div>
                        <p className="description">Corea del Sur</p>
                    </Link>
                </div>
            </div>
        
            
        </>
    )

}

export default WorldCup;