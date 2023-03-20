import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Country = (props) => {
    const info = props.element;

    info.teams.forEach(a => {
        a.path = `/countries/${info.logo}/${a.id}`;
    });

    info.teams.sort(function(a,b){
        if(a.name!=="Selección Nacional"){
            return (a.name>b.name)?1:(a.name<b.name)?-1:0;
        } else {
            return a.name
        }
    })
    
    return (
        <>
            <div className="back">
                <a href="/countries">← Atrás</a>
            </div>
            <div id="list">
                {info.teams.map(item => (
                    <div key={item.id} className="product-box-mini">
                        <Link to={item.path}>
                            <div className="img-box-mini-div">
                                <img
                                    className="img-box-mini" 
                                    src={require(`./img${item.path}.png`)}
                                    alt={item.name} 
                                    loading="lazy"
                                    >
                                </img>
                            </div>
                            <p className="description">{item.name}</p>
                        </Link>
                    </div>
                ))}
            </div> 
        </>
    )
};

export default Country;