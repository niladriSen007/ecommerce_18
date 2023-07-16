import React, { useState } from "react";
import {AiOutlineSearch} from 'react-icons/ai'

const Card = ({ title, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  console.log(isFlipped);

  return (
    <div
      className={`card `}
      //   onMouseEnter={handleCardFlip}
      //   onMouseLeave={handleCardFlip}
    >
      <div className="front card-side" onClick={handleCardFlip}>
        {/* Front side content */}
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1689228152473-a999972a4bbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            className="h-[320px] w-[260px] object-cover rounded-md"
            alt=""
          />
        </div>
      </div>
      <div className="back card-side" onClick={handleCardFlip}>
        {/* Back side content */}
        <div className="p-2 flex flex-col items-center justify-center h-full">
          <h2 className="text-xl font-bold text-white">Laptop</h2>
          <p className="text-white">$123.00</p>
          <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
            <AiOutlineSearch color="blue" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
