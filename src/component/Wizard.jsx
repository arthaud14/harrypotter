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
      <div className="bg-bgcolor">
        <h1 className=" text-center mb-10 px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-primary hover:bg-white hover:text-third">
          Les 4 Sorciers Principaux
        </h1>
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
              <div
                key={hero.name}
                className="mx-auto max-w-md overflow-hidden rounded-lg bg-bgcards drop-shadow-xl border-2 mb-3"
              >
                <h2 className="text-center text-3xl">{hero.name}</h2>
                <img
                  src={hero.image}
                  className="w-full h-1/2 bg-cover"
                  alt={hero.name}
                />
                <div className="p-4">
                  <p className="mb-1 text-sm text-primary-500">
                    {hero.species}
                  </p>
                  <h3 className="text-xl font-medium text-gray-900">
                    {hero.gender}
                  </h3>
                  <p className="mt-1 text-gray-500">{hero.house}</p>
                  <p className="mt-1 text-gray-500">{hero.patronus}</p>
                  <p className="mt-1 text-gray-500">{hero.dateOfBirth}</p>
                  <div className="mt-4 flex gap-2"></div>
                </div>
              </div>
            ))
        )}
      </div>
    </>
  );
};

export default Wizard;
