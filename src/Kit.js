import React from "react";
import "./App.css";

const Kit = (props) => {
    const data = props.element;
    const kit = data[0];
    const country = data[1];
    const countryName = data[2];
    const teamName = data[3];
    const team = data[4];
    
    kit.name = `Camiseta ${teamName==="Selección Nacional"?countryName:teamName} ${kit.year} ${kit.kit} Versión ${kit.version} ${kit.extra?kit.extra:""}`

    return (
        <>  
            <h4>
                <a href={`/countries/${country}`}>{countryName}</a>
                {" → "}
                <a href={`/countries/${country}/${team}`}>{teamName}</a>
                {" → "}
                <b>{kit.name}</b>
            </h4>
            <h2>{kit.name}</h2>
            <h3 className="price">S/ {kit.price}</h3>
            <div className="img-cont">
                <div className="images">
                    {kit.imgs.map(number => (
                        <div key={`${kit.code}-${number}`} className="image" style={{backgroundImage: `url(${require(`./img/countries/${country}/kits/${kit.code}/${number}.${kit.imgExt}`)})`}}>
                            <button className="img-button"></button>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="title">Especificaciones</h2>
                <table>
                    <tr>
                        <th>Código de Producto</th>
                        <td>{kit.code}</td>
                    </tr>
                    <tr>
                        <th>País</th>
                        <td>{countryName}</td>
                    </tr>
                    <tr>
                        <th>Equipo</th>
                        <td>{teamName}</td>
                    </tr>
                    <tr>
                        <th>Temporada</th>
                        <td>{kit.year}</td>
                    </tr>
                    <tr>
                        <th>Equipación</th>
                        <td>{kit.kit}</td>
                    </tr>
                    <tr>
                        <th>Versión</th>
                        <td>{kit.version} {kit.extra}</td>
                    </tr>
                    <tr>
                        <th>Tallas</th>
                        <td>S, M, L, XL, XXL (Revisar talla de medidas)
                        </td>
                    </tr>
                    <tr>
                        <th>Entrega</th>
                        <td>1 a 5 días (Si está disponible en stock físico), 20 a 30 días (Si no se encuentra en stock físico)</td>
                    </tr>
                </table>
            </div>
        </>
    )  
};

export default Kit;