"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const links = [
    { label: "mekke", url: "/" },
    { label: "kudüs", url: "/kudus" },
    { label: "iletişim", url: "/contact" },
    { label: "hakkımızda", url: "/about" },
  ];
  const [active, setActive] = useState(false);

  return (
    <header className="flex flex-col w-full -mb-16">
      <div className="flex flex-row justify-between border-b-2 border-blue-300 h-14 items-center lg:pr-20 md:pr-10 ">
        <div className="relative flex h-10 w-10 ">
          <Image
            src="/images/bera.jpeg"
            alt="Bera logo"
            fill
            className="rounded-full h-14 ml-10"
          />
        </div>
        <div className="flex flex-row space-x-2">
          {links.map((linkObj) => (
            <Link
              className="flex justify-center items-center lg:px-4 sm:px-2 hover:bg-blue-300 hover:rounded-lg w-auto h-14 font-bold text-blue-800 uppercase "
              key={linkObj.label}
              href={linkObj.url}
            >
              {linkObj.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex relative h-96 w-full">
        <Image
          fill
          className="object-fit"
          src="/images/bera.jpeg"
          alt="Bera image"
        />
      </div>
    </header>
  );
};

export default Header;
