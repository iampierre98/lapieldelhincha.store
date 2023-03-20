import React from 'react';
import getKits from "./getKits";

const LongSleeve = () => {
  const data = getKits;
  const allLongSleeve = [];

  data.forEach(kit => {
    if(kit.extra!==null && kit.extra.includes("Manga Larga")){
      allLongSleeve.push(kit);
    }
  })

  allLongSleeve.sort((a,b)=>{
    return (a.name>b.name)?1:(a.name<b.name)?-1:0;
  })

  if(allLongSleeve.length>0){
    return (
      <div>
        <h4 className='h4title'>Manga Larga</h4>
        <div id="list">
          {allLongSleeve.map(item => (
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
        <h4 className='h4title'>Manga Larga</h4>
        <h2 className='tba'>¡Próximamente! ♥</h2>
      </>
    )
  };
};

export default LongSleeve;