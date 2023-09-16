"use client";
import { useRouter } from "next/navigation";
import React from "react";

type TourInfoProps = {
  date: string;
  where: string;
  info: string;
  amount: string;
};

const TourInfo: React.FC<TourInfoProps> = ({ date, where, info, amount }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/tours");
  };

  return (
    <div className="w-full flex flex-col h-full">
      <div className="flex-grow">
        <h2 className="text-lg font-semibold">{`${date} ${where}`}</h2>
        <p className="text-xs italic mt-2">{`${info} , İLGİNİZDEN DOLAYI TEŞEKKÜR EDERİZ.`}</p>
      </div>

      <div className="flex items-center space-x-2 pt-5 ">
        <div className="text-white bg-blue-400 px-2 py-1 rounded-md ">
          {amount}
        </div>
        <button
          onClick={handleClick}
          className="text-white bg-pink-400 px-2 py-1 rounded-md cursor-pointer hover:bg-pink-500"
        >
          Devamı &rarr;
        </button>
      </div>
    </div>
  );
};

export default TourInfo;
