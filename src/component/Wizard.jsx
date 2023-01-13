import React, { useEffect, useState } from "react";
import axios from "axios";

const Wizard = () => {
  const [wizards, setWizards] = useState(null);
  const fetchWizard = async () => {
    try {
      const res = await axios.get("https://hp-api.onrender.com/api/characters");
      setWizards(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchWizard();
  }, []);

  return (
    <>
      <h1>Les 3 Sorciers Principaux</h1>
      {!wizards ? (
        <p>Loading...</p>
      ) : (
        wizards
          .filter(
            (hero) =>
              hero.name === "Harry Potter" ||
              hero.name === "Hermione Granger" ||
              hero.name === "Ron Weasley" ||
              hero.name === "Lord Voldemort" 
          )
          .map((hero) => (
            <div key={hero.name}>
              <h2>{hero.name}</h2>
              <img src={hero.image} alt={hero.name} />
              <h3>{hero.species}</h3>
              <h3>{hero.gender}</h3>
              <h3>{hero.house}</h3>
            </div>
          ))
      )}
    </>
  );
};

export default Wizard;
