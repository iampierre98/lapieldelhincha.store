import React from 'react';
import ImportantTeams from "./components/ImportantTeams";
import WorldCup from './components/WorldCup';

const Home = () => {
  

  return (
    <>
    <div>
      <ImportantTeams></ImportantTeams>
    </div>
    <div>
      <img alt="world cup banner" className='imgbanner' src={require(`./img/worldcupbanner.png`)}></img>
    </div>
    <div>
      <WorldCup></WorldCup>
    </div>
    <hr></hr>
    </>
      
  );
};

export default Home;