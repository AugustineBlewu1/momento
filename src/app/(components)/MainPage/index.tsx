"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const MainPage = () => {

  return (
    <div className="mt-12 text-center items-center">
      <span className="px-4 py-3 font-normal text-sm rounded-3xl bg-lime-200 ">
        Whatever your size, sector or stage of growth
      </span>

      <div className="pt-8">
        <h1 className="font-normal text-5xl tracking-wide">
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
        <h1 className="font-normal text-5xl tracking-wide pt-4">
          All your business in one app.
        </h1>
      </div>

      <div className="pt-8">
        <h2 className="font-light text-xl tracking-wide">
          Keep your business account needs safely organized under
          <br></br> one roof, Manage money quickly. easily & efficiently
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

      <div className="pt-12">
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
