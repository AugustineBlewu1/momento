"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { CardsContent, cardsContent } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";

const CustomPage = () => {
  return (
    <div className="bg-white w-full px-72 text-center mt-44">
      <div className="pt-20">
        <span className="uppercase bg-lime-200 px-4 py-3 rounded-xl">
          CUSTOM CARD
        </span>
        <h2 className="font-normal text-5xl tracking-wide pt-8">
          Customized cards available with every plan.
        </h2>
        <h2 className="text-center font-light text-xl tracking-wide pt-8">
          Pay securely online and in-store with ohvsical and virtual cards.
          Transparent <br></br> pricing - no hidden fees, Monthly payments up to
          $60000
        </h2>
        <div className="grid grid-cols-3 mt-16  items-center">
          <div className="space-y-4">
            <h2 className="font-light text-3xl text-start tracking-wider">
              Discover the <br /> Momento Card.
            </h2>
            <Button className="flex items-center">
              Download in PDF Format
              <Download className="h-4 w-4 ml-2" />
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={"/momento-logos/Layer 14.png"}
              height={150}
              width={280}
              alt="Discover Card"
            />
          </div>
          <div className="flex justify-end items-end">
            <Image
              src={"/momento-logos/Layer 15.png"}
              height={150}
              width={280}
              alt="Discover Card"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 text-2xl items-center mt-16">
          <div className="font-light flex items-start">The essentials</div>
          <div className="underline font-medium flex items-center justify-center">
            Discover Plus Card
          </div>
          <div className="underline font-medium flex justify-center ml-20">
            Discover Premium Card
          </div>
        </div>
        <div className="flex flex-col text-2xl justify-between items-center align-middle mr-10 space-y-14 mt-10 mb-20">
          {cardsContent?.comparison
            .map((e, index) => ({
              feature: e.feature,
              description: e?.description,
              discoverPlusCard: e?.["Discover Plus Card"],
              discoverPremiumCard: e?.["Discover Premium Card"],
            }))
            .map((card: CardsContent, index) => (
              <section key={index} className="w-full space-y-7">
                <div className="w-full h-[1px] bg-gray-200" ></div>
                <div className="grid grid-cols-3 w-full items-center text-start">
                  <div className="flex flex-col">
                    <span className="font-light">{card.feature}</span>
                    <span className="text-lg w-52 font-light">
                      {card.description}
                    </span>
                  </div>
                  <div className="text-center flex justify-center">{card?.discoverPlusCard}</div>
                  <div className="text-center flex justify-center ml-24">{card?.discoverPremiumCard}</div>
                </div>
              </section>
            ))}
        </div>

        
      </div>
    </div>
  );
};

export default CustomPage;
