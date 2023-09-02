"use client";
import React, { createContext } from "react";

export const TourContext = createContext<Tour | null>(null);
/**
 * export const TourContext = createContext<TourInfo>({
  date: "date",
  where: "where",
  info: "info",
  amount: "amount",
  place: "place",
});
 */

type TourProps = {
  children: React.ReactNode;
};
const dateStart = new Date();
const dateEnd = new Date(dateStart.getTime());

const TourProvider = ({ children }: TourProps) => {
  function dateBetweenFormat(dateToAdd: number): string {
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

  const tourInfo = {
    date: dateBetweenFormat(13),
    where: "Kudüs",
    info: "grup dolu",
    amount: "750$",
    place: "otel",
  };

  const tourDates = {
    startDate: dateStart,
    endDate: dateEnd,
  };

  const tourDetails = {
    days: 4,
    plan: [
      { day: 1, todo: "asdfasdf" },
      { day: 2, todo: "asqwerqwer" },
      { day: 3, todo: "asdfsadf" },
      { day: 4, todo: "asdfasdfasdzxc" },
    ],
  };

  return (
    <TourContext.Provider value={{ tourInfo, tourDates, tourDetails }}>
      {children}
    </TourContext.Provider>
  );
};

export default TourProvider;
