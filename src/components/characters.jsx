import React, { useState, useEffect } from "react";
import axios from "axios";

function Characters() {
  const [charactersData, setCharactersData] = useState();

  const publicKeyAPI = "b7eca3b33098c5b2c9564b385354f8c0";
  //   const privateKeyAPI = "076e7ded8107fb235ff5e77324ed1d263353ca2e";
  //   const Key = "1076e7ded8107fb235ff5e77324ed1d263353ca2eb7eca3b33098c5b2c9564b385354f8c0";
  const md5Key = "6a15a6fd426a36a29620438c8873103a";
  const urlAPI =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=" +
    publicKeyAPI +
    "&hash=" +
    md5Key;

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(urlAPI);
      setCharactersData(res.data.data.results);
    };
    fetch();
  }, [urlAPI]);

  //Cada vez que se recarga la pagina mediante el navegador se rompe la llamada a la API o la respuesta.

  // console.log(charactersData[0].id)

  // Mapeo de las imagenes de los personajes de la API

  return (
    <div className="flex flex-wrap">
      {charactersData.map((character, index) => (
        <div key={index} className="w-3/4">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className="w-full h-auto rounded-md"
          />
          <p className="text-center text-lg font-medium">{character.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Characters;
