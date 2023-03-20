import React from 'react';
import getKits from "./getKits";

const Brand = (props) => {
  const brandName = props.element.name;
  const data = getKits;
  const allBrand = [];

  data.forEach(kit => {
    if(kit.brand===brandName.toLowerCase()){
      allBrand.push(kit);
    }
  })

  allBrand.sort((a,b)=>{
    return (a.name>b.name)?1:(a.name<b.name)?-1:0;
  })

  if(allBrand.length>0){
    return (
      <div>
        <h4 className='h4title'>{brandName}</h4>
        <div id="list">
          {allBrand.map(item => (
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
        <h4 className='h4title'>{brandName}</h4>
        <h2 className='tba'>¡Próximamente! ♥</h2>
      </>
    )
  };
}

export default Brand;