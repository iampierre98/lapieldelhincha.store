import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Home from "./Home";
import Brands from "./Brands";
import Brand from "./Brand";
import Countries from "./Countries";
import Country from "./Country";
import Player from "./Player";
import LongSleeve from "./LongSleeve";
import Woman from "./Woman";
import Kids from "./Kids";
import Team from "./Team";
import Kit from "./Kit";
import Retro from "./Retro";

import database from "./data.json";
import Navbar from "./components/Navbar";
import Footbar from "./components/Footbar";
import "./App.css";

const store = createStore(dataReducer, applyMiddleware(thunk));

const data = database.results;
const brands = database.brands;

const App = () => {

  /*useEffect(()=>{
    setTimeout(() => {
      window.scrollTo(0, 0);

    }, 300)
  })*/

  document.oncontextmenu = function(){
    return false
  }

  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <a className="logodiv" href="/">
          <img alt="logo banner" className='imghomebanner' src={require(`./img/homebanner.png`)}></img>
          <img alt="logo banner" className='imghomelogo' src={require(`./img/logo.png`)}></img>
        </a>
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/brands" element={<Brands/>}></Route>
          <Route path="/countries" element={<Countries/>}></Route>
          <Route path="/player" element={<Player/>}></Route>
          <Route path="/longsleeve" element={<LongSleeve/>}></Route>
          <Route path="/woman" element={<Woman/>}></Route>
          <Route path="/kids" element={<Kids/>}></Route>
          <Route path="/retro" element={<Retro/>}></Route>
          {
            brands.map(item => (
              <Route key={data[item.id]} path={`/brands/${item.logo}`} element={<Brand element={brands[item.id]}/>}></Route>
            ))
          }
          {
            data.map(item => (
              <Route key={data[item.id]} path={`/countries/${item.logo}`} element={<Country element={data[item.id]}/>}></Route>
            ))
          }
          {
            data.map(item => (
              item.teams.map(element => (
                <Route key={`${data[item.id]}${element.id}`} path={`/countries/${item.logo}/${element.id}`} element={<Team element={[data[item.id].teams[element.id], item.logo, item.name]}/>}></Route>
              ))
            ))
          }
          {
            data.map(item => (
              item.teams.map(element => (
                  element.kits.map(kit => (
                      <Route path={`/kit/${kit.code}`} element={<Kit element={[kit, item.logo, item.name, element.name, element.id]}/>}></Route>
                  ))
              ))
            ))
          }
          
          
        </Routes>
        
        
        <Footbar/>
      </Router>
    </Provider>
  )
}

export default App;