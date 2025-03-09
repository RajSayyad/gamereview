import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface GameCd {
  id: string;
  attributes: {
    name: string;
    image_url: string;
    slug: string | null;
    score: number;
  };
}

const Home = () => {
  const [gameCd, setGameCd] = useState<GameCd[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/gamecds.json", {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        console.log("API Response:", response.data);
        setGameCd(response.data.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);
  return (
    <div className="bg-[#2b1c14] min-h-screen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {gameCd.map((game, index) => (
          <div key={index} className="bg-[#1a0e08] p-4 rounded-lg shadow-md">
            <Link
              key={game.id}
              to={`/cd/${game.attributes.slug ?? game.id}`} // Fallback to ID if slug is null
              className="block bg-[#1a0e08] p-4 rounded-lg shadow-md transition hover:scale-105"
            >
              <img
                src={game.attributes.image_url}
                alt={game.attributes.name}
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <h3 className="text-white mt-3 text-lg font-semibold truncate">
                {game.attributes.name}
              </h3>
              <div className="flex items-center mt-2">
                <span className="bg-green-600 text-white px-3 py-1 rounded-md font-bold">
                  {game.attributes.score}
                </span>
                <span className="text-gray-400 ml-2">Generally Favorable</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
