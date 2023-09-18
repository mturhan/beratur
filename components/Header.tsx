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
      <div className="flex flex-row justify-end border-b-2 border-blue-300 h-14 items-center lg:pr-32 md:pr-20 ">
        {links.map((linkObj) => (
          <Link
            className="flex justify-center items-center md:px-4 lg:px-7 sm:px-2 hover:bg-blue-300 hover:rounded-lg w-28 h-14 font-bold text-blue-800 uppercase "
            key={linkObj.label}
            href={linkObj.url}
          >
            {linkObj.label}
          </Link>
        ))}
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
