import React from "react";
import "./App.css";

const Team = (props) => {
    const data = props.element[0];
    const country = props.element[1];
    const countryName = props.element[2];

    data.kits.sort((a,b)=>{
        a.name = `Camiseta ${data.name==="Selección Nacional"?countryName:data.name} ${a.year} ${a.kit} Versión ${a.version} ${a.extra?a.extra:""}`;
        return (a.name>b.name)?1:(a.name<b.name)?-1:0;
    })

    data.kits.reverse()

    if(data.kits.length > 0){
       return (
            <>  
                <h4>
                    <a href={`/countries/${country}`}>{countryName}</a>
                    {" → "}
                    <b>{`${data.name} (${data.kits.length})`}</b>
                </h4>
                <div id="list">
                    {data.kits.map(item => (
                        <div key={item.code} className="product-box">
                            <a href={`/kit/${item.code}`}>
                                <div>
                                    <img 
                                        className="img-box" 
                                        src={require(`./img/countries/${item.country}/kits/${item.code}/0.${item.imgExt}`)} 
                                        alt="imagen"
                                        loading="lazy"> 
                                    </img>
                                </div>
                                <p className="description">{item.name}</p>
                            </a>
                            <p>S/ {item.price}</p>
                        </div>
                    ))}
                </div>
            </>
        ) 
    } else {
        return (
            <>  
                <h3>
                    <a href={`/countries/${country}`}>{countryName}</a>
                    {" → "}
                    <b>{data.name}</b>
                </h3>
                <h2 className='tba'>¡Próximamente! ♥</h2>
            </>
        )
    }
};

export default Team;