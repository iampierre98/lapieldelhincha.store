import database from "./data.json";

const allKits = [];
const data = database.results

data.forEach(countries => {
  countries.teams.forEach(team => {
    team.kits.forEach(kits => {
      team.name==="Selección Nacional"?kits.team=countries.name:kits.team=team.name;
      kits.name = `Camiseta ${kits.team} ${kits.year} ${kits.kit} Versión ${kits.version} ${kits.extra?kits.extra:""}`;
      kits.country = countries.logo;
      allKits.push(kits);
    })
  })
})

export default allKits;