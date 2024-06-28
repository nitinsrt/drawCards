import React from "react";

const Cards = (props) => {
    const links = ["https://upload.wikimedia.org/wikipedia/commons/a/a0/Naipe_copas.png", "https://upload.wikimedia.org/wikipedia/commons/d/db/SuitDiamonds.svg","https://upload.wikimedia.org/wikipedia/commons/8/8a/SuitClubs.svg"]
  return (
    <div className="w-20 h-40 rounded-md shadow-md flex flex-col justify-center items-center bg-white p-3">
      <div className="w-full h-1/3 flex items-start justify-start ">
        <p>{props.number}</p>
      </div>
      <div className="w-full h-2/3 flex justify-center">
        <img
          className="w-5 h-5"
          src=""
        />
      </div>
    </div>
  );
};

export default Cards;
