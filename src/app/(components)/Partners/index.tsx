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
    <div className="w-full h-64 bg-primaryDark">
      <h2>The fatest growing companies use Momento</h2>

      {logos.map((image) => (
        <Image
          src={`/momento-logos/${image}`}
          alt="Logos"
          width={60}
          height={15}
        />
      ))}
    </div>
  );
};
export default Partners;
