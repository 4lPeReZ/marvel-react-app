import React, { useState, useEffect } from "react";
import axios from "axios";

function Characters() {
  const [charactersData, setCharactersData] = useState();

  const publicKeyAPI = "b7eca3b33098c5b2c9564b385354f8c0";
  //   const privateKeyAPI = "076e7ded8107fb235ff5e77324ed1d263353ca2e";
  //   const Key = "1076e7ded8107fb235ff5e77324ed1d263353ca2eb7eca3b33098c5b2c9564b385354f8c0";
  const md5Key = "6a15a6fd426a36a29620438c8873103a";
  const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey="+publicKeyAPI+"&hash=" +md5Key;


  useEffect(() => {
    const fetch = async()=>{
      const res = await axios.get(urlAPI)
      setCharactersData(res.data.data.results);
    }
    fetch();
  },[urlAPI])

  //No se porque se parte la app al hacer diferentes peticiones
  
console.log(charactersData[0].id)
  return (
    <div>

        {/* {charactersData[0].name}

        <p></p>
        
        <img src="{}" alt="" />

        {charactersData[1].name} */}
        
    </div>
  );
}

export default Characters;
