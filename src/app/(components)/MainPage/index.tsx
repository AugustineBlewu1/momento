"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

const MainPage = (style: CSSProperties) => {
  return (
    <div className="mt-12 text-center items-center relative" style={style}>
      <div className="absolute right-0 -z-5">
        <Image
          src={"/momento-logos/banner_z.png"}
          height={100}
          width={150}
          alt="Side Logo"
          className="hidden md:block"
        />
      </div>
      <span className="px-4 py-3 font-normal text-sm rounded-3xl bg-lime-200 ">
        Whatever your size, sector or stage of growth
      </span>

      <div className="pt-8">
        <h1 className="font-normal text-3xl  md:text-5xl tracking-wide">
          The Modern{" "}
          <motion.span
            initial={{ color: "#0F2028" }}
            animate={{ color: ["#0F2028", "#C2FA6B", "#667085"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            finance
          </motion.span>{" "}
          platform.
        </h1>
        <h1 className="font-normal text-2xl md:text-5xl tracking-wide pt-4">
          All your business in one app.
        </h1>
      </div>

      <div className="md:pt-8 pt-4 md:w-[400px] text-center mx-auto px-4">
        <h2 className="font-light text-lg md:text-xl tracking-wide ">
          Keep your business account needs safely organized under
           one roof, Manage money quickly. easily & efficiently
        </h2>
      </div>

      <div className="flex flex-row text-center justify-center  gap-7 pt-10">
        <Button className="flex items-center">
          Discover our efforts
          <ArrowUpRightIcon className="h-4 w-4 ml-2" />
        </Button>
        <Button className="flex items-center" variant={"outline"}>
          Learn More
        </Button>
      </div>

      <div className="flex pt-12 items-center justify-center">
        <Image
          src={"/momento-logos/topbabber.png"}
          alt="Banner"
          width={1200}
          height={350}
        ></Image>
      </div>
    </div>
  );
};

export default MainPage;
