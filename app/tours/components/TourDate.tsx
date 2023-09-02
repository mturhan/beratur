import React from "react";

const TourDate = ({ data }: TourDates | any) => {
  return (
    <div>
      <p>{data.startDate?.toString()}</p>
      <p>{data.endDate?.toString()}</p>
    </div>
  );
};

export default TourDate;
