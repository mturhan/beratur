import { TourContext } from "@/providers/TourProvider";
import React, { useContext } from "react";

const PriceInfo = () => {
  const { tourInfo } = useContext(TourContext) || {};
  return (
    <div>
      <h1>ÇOCUK FİYATLARI</h1>
      <ul>
        <li>0 - 2 YAŞ : 150 USD</li>
        <li>2 - 6 YAŞ : 300 USD</li>
        <li>6 YAŞ ÜZERİ TAM ÜCRET</li>
      </ul>

      <h1>YETİŞKİN FİYATLARI</h1>

      <ul>
        <li>
          2'Lİ VE 3'LÜ ODALARDA KİŞİ BAŞI{" "}
          {tourInfo?.amount.slice(0, tourInfo?.amount.length - 1)} USD
        </li>
      </ul>
      <ul>
        <li>
          SİNGLE ODA FİYATI (TEK KALMAK İSTEYENLER) 200 USD FARK ALINMAKTADIR
        </li>
      </ul>
    </div>
  );
};

export default PriceInfo;
