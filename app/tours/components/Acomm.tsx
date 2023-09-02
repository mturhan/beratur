import { TourContext } from "@/providers/TourProvider";
import React, { useContext } from "react";

const Acomm = () => {
  const { tourInfo } = useContext(TourContext) || {};
  return (
    <div>
      <p>{tourInfo?.place}</p>
    </div>
  );
};

export default Acomm;
