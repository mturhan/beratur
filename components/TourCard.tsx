import Image from "next/image";
import React from "react";
import TourInfo from "./TourInfo";

type TourCardProps = {
  img: string;
};

function dateBetweenFormat(dateToAdd: number): string {
  const dateStart = new Date();
  const dateEnd = new Date(dateStart.getTime());
  dateEnd.setDate(dateStart.getDate() + dateToAdd);

  return `${dateStart.toLocaleDateString("tr-TR", {
    day: "numeric",
  })} - ${dateEnd.toLocaleDateString("tr-TR", { dateStyle: "long" })}`;
}

const tour = {
  date: dateBetweenFormat(13),
  where: "Kudüs",
  info: "grup dolu",
  amount: "750$",
};

const TourCard = ({ img }: TourCardProps) => {
  return (
    <div className="w-64 h-100 mx-auto rounded-xl shadow-xl flex flex-col bg-white">
      {/* Card Head */}
      <div className="relative h-56 bg-gradient-to-br from-orange-400 via-red-500 to-red-600 rounded-t-xl">
        <Image
          className="rounded-t-lg object-cover"
          src={img}
          alt="Tour image"
          layout="fill"
        />
      </div>

      {/* Card Body */}
      <div className="flex flex-col items-start p-4 ">
        <TourInfo
          date={tour.date}
          where={tour.where}
          info={tour.info}
          amount={tour.amount}
        />
      </div>
    </div>
  );
};

export default TourCard;
