import Header from "@/components/Header";
import TourCard from "@/components/TourCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center ">
      <TourCard img="/images/bera.jpeg" />
      <TourCard img="/images/bera.jpeg" />
      <TourCard img="/images/bera.jpeg" />
      <TourCard img="/images/bera.jpeg" />
      <TourCard img="/images/bera.jpeg" />
      <TourCard img="/images/bera.jpeg" />
      <TourCard img="/images/bera.jpeg" />
    </main>
  );
}
