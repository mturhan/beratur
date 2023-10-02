"use client";
import Image from "next/image";
import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import DeniedModal from "./DeniedModal";
import { useSearchParams } from "next/navigation";

const Header = () => {
  const links = [
    { label: "mekke", url: "/" },
    { label: "kudüs", url: "/kudus" },
    { label: "iletişim", url: "/contact" },
    { label: "hakkımızda", url: "/about" },
  ];

  const { data } = useSession();
  const params = useSearchParams();

  const showDeniedModal = params.get("error");

  return (
    <>
      <header className="flex flex-col w-full  sticky top-0 z-50">
        <div className="flex flex-row  justify-between border-b-2 bg-gradient-to-br from-blue-300 border-cyan-500 to-blue-100 h-14 items-center lg:pr-20 md:pr-10 ">
          <div
            onClick={!data ? () => signIn("google") : () => signOut()}
            className="relative flex h-10 w-10 ml-10 cursor-pointer "
          >
            <Image
              src="/images/bera.jpeg"
              alt="Bera logo"
              fill
              className="rounded-full h-14 "
            />
          </div>
          <div className="flex flex-row space-x-2">
            {links.map((linkObj) => (
              <Link
                className="flex justify-center items-center lg:px-4 sm:px-2 hover:bg-blue-500 hover:rounded-lg w-auto h-14 font-bold text-blue-800 uppercase "
                key={linkObj.label}
                href={linkObj.url}
              >
                {linkObj.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <div className="flex relative h-96 w-full ">
        <Image
          fill
          className="object-fit"
          src="/images/bera.jpeg"
          alt="Bera image"
        />
      </div>
      {showDeniedModal && <DeniedModal />}
    </>
  );
};

export default Header;
