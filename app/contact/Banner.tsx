import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-96 mt-5 mb-10">
      <div className="flex flex-col h-80 w-96 relative">
        <Image
          fill
          className="-z-10 object-fit opacity-30 "
          src="/images/bera.jpeg"
          alt="Bera image"
        />
        <div className="flex flex-col justify-center items-center absolute inset-0">
          <h1>BERATUR - BERATUR HAYIRLI OLSUN</h1>
          <h1>0212 222 22 11</h1>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col break-words">
          <h1>Beratur</h1>
          <p>eyüp mah eyüp sk no:21 eyüp/İSTANBUL</p>
          <p>
            <strong>Tel:</strong> (+90) 0212 222 22 11
          </p>
          <p>
            <strong>Mail:</strong> info@beratur.com
          </p>
        </div>
        <div className="">
          <form className="flex flex-row space-x-2" action="post" method="post">
            <div className="flex flex-col space-y-2">
              <label>İsim Soyisim</label>
              <label>Telefon Numaranız</label>
              <label>E-mail Adresiniz</label>
              <label>Mesajınız</label>
            </div>
            <div className="flex flex-col space-y-2">
              <input id="isimsoyisim" type="text" name="txt_isim" />
              <input id="telefon" type="text" name="txt_tel" />
              <input id="email" type="email" name="txt_mail" />
              <input id="mesaj" type="text" name="area_mesaj" />
              <button
                className="rounded-md border-blue-200 border-2 h-10 hover:bg-blue-400 hover:border-none"
                type="submit"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
