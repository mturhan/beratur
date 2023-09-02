"use client";
import React from "react";
import TourDate from "./TourDate";
import TourProgram from "./TourProgram";
import PriceInfo from "./PriceInfo";
import { Tab } from "@headlessui/react";
import Acomm from "./Acomm";

interface DetailsProps {
  tourDetails: TourDetails | any;
  tourDates: TourDates | any;
}

const TourDetails = ({ tourDetails, tourDates }: DetailsProps) => {
  return (
    <div className="flex flex-col ml-3 mt-3 bg-blue-100 rounded-lg">
      <h1 className="font-bold  uppercase pl-4 text-blue-400 underline text-center ">
        tur programı
      </h1>

      <Tab.Group>
        <Tab.List>
          <Tab className="tabs">tur programı</Tab>
          <Tab className="tabs">fiyat bilgisi</Tab>
          <Tab className="tabs">konaklama</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="content">
            <div>
              <h1>tur tarih bilgileri</h1>
            </div>
            <TourDate data={tourDates} />
            <div>
              <h1>tur günleri</h1>
            </div>
            <TourProgram />
          </Tab.Panel>
          <Tab.Panel className="content">
            <PriceInfo />
          </Tab.Panel>
          <Tab.Panel className="content">
            <Acomm />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TourDetails;
