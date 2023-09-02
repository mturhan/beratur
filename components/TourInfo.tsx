"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TourInfo = (tourInfo: TourInfo) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/tours");
  };

  return (
    <div className="h-36 flex flex-col justify-around whitespace-nowrap">
      <h2 className="font-bold ml-5 ">
        {tourInfo.date} {tourInfo.where}
      </h2>
      <p className="flex italic ml-5 mb-3 whitespace-normal">
        {tourInfo.info}MŞTUR , İLGİNİZDEN DOLAYI TEŞEKKÜR EDERİZ.
      </p>
      <div className="flex space-x-2 ml-5 text-center w-1/3 ">
        <div className="bg-orange-100 rounded-md w-1/2 hover:bg-orange-300 hover:cursor-pointer">
          {tourInfo.amount}
        </div>
        <Link
          href={{
            pathname: "/tours",
          }}
        >
          Devamı &rarr;
        </Link>
        <button
          onClick={handleClick}
          className="bg-rose-100 rounded-md w-1/2 hover:bg-rose-300 hover:cursor-pointer"
        ></button>
      </div>
    </div>
  );
};

export default TourInfo;
