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

  return (
    dateStart.toLocaleDateString("tr-TR", {
      day: "numeric",
    }) +
    "-" +
    dateEnd.toLocaleDateString("tr-TR", {
      dateStyle: "long",
    })
  );
}

const tour = {
  date: dateBetweenFormat(13),
  where: "Kudüs",
  info: "grup dolu",
  amount: "750$",
};

const TourCard = ({ img }: TourCardProps) => {
  return (
    <div className="flex w-auto h-96 mx-10 pt-4 flex-col ">
      <div className="relative h-56">
        <Image
          fill
          className="rounded-lg object-fit"
          src={img}
          alt="Bera image"
        />
      </div>
      <div className="h-40">
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
