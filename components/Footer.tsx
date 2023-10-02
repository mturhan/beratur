import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerNavs = [
    {
      href: "/about",
      name: "Hakkimizda",
    },
    {
      href: "/contact",
      name: "İletişim",
    },
    {
      href: "/admin",
      name: "Admin Girişi",
    },
  ];
  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img
          src="/images/bera.jpeg"
          className="w-32 sm:mx-auto rounded-full shadow-slate-500 shadow-md"
        />
        <p className="leading-relaxed mt-2 text-xl font-serif italic text-sky-600">
          Hedeflerimiz Hayalleriniz
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li>
            <Link
              className=" hover:text-gray-800 capitalize"
              key={idx}
              href={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 Beratur Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
