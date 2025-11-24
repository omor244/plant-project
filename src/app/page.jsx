import Banner from "@/Components/Banner/Banner";
import Relevant from "@/Components/Relevant";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-12/12 mx-auto bg-zinc-50 font-sans ">
      <Banner></Banner>
      <Relevant></Relevant>
    </div>
  );
}
