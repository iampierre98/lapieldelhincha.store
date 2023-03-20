import React from 'react';
import getKits from "./getKits";

const Woman = () => {

  const data = getKits
  //console.log(data)

  const allWoman = []
  data.forEach(kit => {
    if(kit.extra !== null && kit.extra.includes("Mujer")){
      allWoman.push(kit);
    }
  })

  allWoman.sort((a,b)=>{
    return (a.name>b.name)?1:(a.name<b.name)?-1:0;
  })

  //console.log(allWoman)

  if(allWoman.length>0){
    return (
      <div>
        <h4 className='h4title'>Versión Femenina</h4>
        <div id="list">
          {allWoman.map(item => (
            <div key={item.code} className="product-box">
              <a href={`/kit/${item.code}`}>
                <div>
                  <img 
                    className="img-box" 
                    src={require(`./img/countries/${item.country}/kits/${item.code}/0.${item.imgExt}`)} 
                    alt={`${item.code}.cover`}
                    loading="lazy">
                  </img>
                </div>
                <p className="description">{item.name}</p>
              </a>
              <p>S/ {item.price}</p>
            </div>
          ))}

        </div>
      </div>
    )
  }
  else {
    return (
      <>
        <h4 className='h4title'>Versión Femenina</h4>
        <h2 className='tba'>¡Próximamente! ♥</h2>
      </>
    )
  };
};

export default Woman;