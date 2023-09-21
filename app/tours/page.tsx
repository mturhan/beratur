"use client";
import TourIntro from "./components/TourIntro";
import TourDetails from "./components/TourDetails";
import { useContext } from "react";
import { TourContext } from "@/providers/TourProvider";

const TourPage = () => {
  const { tourInfo, tourDates, tourDetails } = useContext(TourContext) || {};

  return (
    <div className="flex flex-col lg:w-1/2 sm:w-3/4 pb-20 w-96 ">
      <TourIntro tourInfo={tourInfo} />
      <TourDetails tourDetails={tourDetails} tourDates={tourDates} />
    </div>
  );
};

export default TourPage;
