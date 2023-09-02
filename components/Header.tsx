import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const links = [
    { label: "anasayfa", url: "/" },
    { label: "iletişim", url: "/contact" },
    { label: "hakkımızda", url: "/about" },
  ];

  return (
    <div className="flex flex-col w-1/2">
      <div className="flex flex-row justify-start ">
        {links.map((linkObj) => (
          <Link
            className="flex justify-center items-center hover:bg-blue-300 hover:rounded-lg w-auto px-2 h-10 font-bold text-blue-800 uppercase"
            key={linkObj.label}
            href={linkObj.url}
          >
            {linkObj.label}
          </Link>
        ))}
      </div>
      <div className="flex relative h-80 w-full">
        <Image
          fill
          className="object-fit"
          src="/images/bera.jpeg"
          alt="Bera image"
        />
      </div>
    </div>
  );
};

export default Header;
