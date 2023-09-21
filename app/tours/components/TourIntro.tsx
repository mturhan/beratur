import Image from "next/image";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const TourIntro = ({ tourInfo }: TourInfo | any) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between mt-20 h-full">
      <div className="flex flex-col mr-5 lg:w-1/2 ">
        <h1 className="font-bold ml-3 uppercase">tur genel bilgileri</h1>
        <div className="mx-3 flex flex-col pb-4  divide-y divide-blue-200 divide-opacity-40">
          <div className="mb-2">
            {Object.keys(tourInfo)
              .filter((key) => typeof tourInfo[key] !== "object")
              .map((key) => {
                return (
                  <div
                    key={key}
                    className="flex bg-blue-200 px-4 mt-1 h-9 font-bold items-center text-blue-500 text-opacity-60"
                  >
                    <p>{tourInfo[key]}</p>
                  </div>
                );
              })}
          </div>

          <div className="pt-2 flex flex-col space-y-4 w-auto">
            <div className="flex bg-orange-300 hover:cursor-pointer group h-12 items-center uppercase justify-center ">
              <p className=" mx-3 font-bold group-hover:opacity-40 text-rose-400">
                hemen randevu oluştur
              </p>
            </div>
            <div className="flex bg-rose-300 hover:cursor-pointer group h-9 items-center uppercase justify-center ">
              <FiPhoneCall
                className="mr-1 h-7 opacity-80 fill-blue-200 group-hover:opacity-40 stroke-blue-400"
                size={35}
              />
              <p className="text-opacity-80 font-bold group-hover:opacity-40 text-blue-400">
                sizi arayalım
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow relative lg:w-1/2 mr-3 sm:w-auto">
        <div className=" sm:px-3 w-40 flex ">
          <div className="flex  h-56 ">
            <Image
              fill
              className="object-fit"
              src="/images/bera.jpeg"
              alt="Bera image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourIntro;
