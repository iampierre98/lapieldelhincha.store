import database from "./data.json";
//import db from "./datax.json"

export const fetchData = () => /*async dispatch => */{
    /*try {
        dispatch({ type: "FETCH_DATA_REQUEST" });
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        const info = data.results
        console.log(info)
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: info });
    } catch (error) {
        dispatch({type: "FETCH_DATA_FAILURE", paylaod: error.message})
    }*/
    
    const info = database.results
    //const dbs = db.results
    //console.log(dbs)
    //console.log(info)

    return {
        type: "FETCH_DATA_SUCCESS",
        payload: info
    }
}