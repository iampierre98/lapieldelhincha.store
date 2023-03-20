import React from 'react';
import getKits from "./getKits";

const Retro = () => {

  const data = getKits;
  const allRetro = [];

  data.forEach(kit => {
    if(!(kit.year.includes("2022")||kit.year.includes("2022/23")||kit.year.includes("2023")||kit.year.includes("2023/24"))){
      allRetro.push(kit);
    }
  })

  allRetro.sort((a,b)=>{
    return (a.name>b.name)?1:(a.name<b.name)?-1:0;
  })

  if(allRetro.length>0){
    return (
      <div>
        <h4 className='h4title'>Retro</h4>
        <div id="list">
          {allRetro.map(item => (
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
        <h4 className='h4title'>Retro</h4>
        <h2 className='tba'>¡Próximamente! ♥</h2>
      </>
    )
  };
};

export default Retro;