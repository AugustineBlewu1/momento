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
      <h2 className="text-xl text-white md:text-2xl ">The fastest growing companies use Momento</h2>
    <div className="md:flex grid grid-cols-2 md:flex-row gap-3 md:gap-8 justify-center pt-9">
 
      {logos.map((image, index) => (
        <Image
          src={`/momento-logos/${image}`}
          alt="Logos"
          width={150}
          height={85}
          key={index}
        />
      ))}
         </div>
    </div>
  );
};
export default Partners;
