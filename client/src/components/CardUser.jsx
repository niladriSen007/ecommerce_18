import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const CardUser = ({ name, email, address, phone,image,role }) => {
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
            src={image}
            className=" object-cover rounded-md h-72 w-96"
            alt=""
          />
        </div>
      </div>
      <div className="back card-side" onClick={handleCardFlip}>
        {/* Back side content */}
        <div className="p-2 flex flex-col items-center justify-center h-full">
          <div className="w-44 h-12 flex flex-col items-start justify-center">
            <p className="text-sm text-white font-bold">Name - <span className="font-normal">{name}</span></p>
            <p className="text-sm text-white font-bold">Email - <span className="font-normal">{email}</span></p>
            <p className="text-sm text-white font-bold">Address - <span className="font-normal">{address}</span></p>
            <p className="text-sm text-white font-bold">Phone - <span className="font-normal">{phone}</span></p>
            <p className="text-sm text-white font-bold">Role - <span className="font-normal">{role === 0 ? "User" : "Admin"}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
