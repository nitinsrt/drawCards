import React, { useState } from "react";
import Cards from "../components/Cards";
import DrawCards from "../components/DrawCards";
import { data } from "../utils/Data";

const LandingPage = () => {
  const initialState = data;
  const [totalCards, setTotalCards] = useState(initialState);
  const [drawnCards, setDrawnCards] = useState([]);
  const [limit, setLimit] = useState(52);

  const handleDrawCards = () => {
    let randomCards = [];
    let localCards = totalCards;
    let localLimit = limit;
    if (limit >= 5) {
      for (var i = 0; i < 5; i++) {
        const index = parseInt(Math.random() * limit);
        randomCards.push(totalCards.at(index));
        const id = totalCards.at(index).id;
        localCards = localCards.filter((item) => item.id !== id);
        localLimit--;
      }
      setTotalCards(localCards);
      setLimit(localLimit);
      setDrawnCards(randomCards);
    } else {
      alert("No more cards can be drawn");
      setDrawnCards([]);
      setTotalCards(initialState);
      setLimit(52);
    }
  };

  return (
    <div className="w-full h-screen bg-green-400 p-20">
      <div className="w-5/6 mr-10 p-5" onClick={handleDrawCards}>
        <DrawCards />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row grid-cols-5 items-center justify-evenly ">
          {drawnCards.map((item) => {
            return (
              <Cards key={item.id} number={item.number} type={item.type} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
