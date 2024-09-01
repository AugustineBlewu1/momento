"use client";

import Image from "next/image";

const Partners = () => {
  const logos = [
    "Layer 4.png",
    "Layer 5.png",
    "Layer 6.png",
    "Layer 7.png",
    "Layer 8.png",
    "Layer 9.png",
  ];

  return (
    <div className="w-full h-64 bg-primaryDark text-center items-center py-16">
      <h2 className="text-2xl text-white ">The fatest growing companies use Momento</h2>
    <div className="flex flex-row gap-8 justify-center pt-9">

 
      {logos.map((image) => (
        <Image
          src={`/momento-logos/${image}`}
          alt="Logos"
          width={150}
          height={85}
        />
      ))}
         </div>
    </div>
  );
};
export default Partners;
