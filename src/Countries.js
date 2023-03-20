import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import database from "./data.json";

const Countries = () => {
  const data = database.results;

  data.sort((a,b) => {
    return (a.name>b.name)?1:(a.name<b.name)?-1:0;
  })
  
  return (
    <>
      <div className="back">
        <a href="/">← Atrás</a>
      </div>
      <div id="list">
        {data.map(item => (
          <div key={item.id} className="product-box-mini">
            <Link to={"/countries/" + item.logo}>
              <div className="img-box-mini-div">
                <img 
                  className="img-box-mini" 
                  src={require(`./img/countries/flag/${item.logo}.png`)}
                  alt={item.logo}
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

export default Countries;