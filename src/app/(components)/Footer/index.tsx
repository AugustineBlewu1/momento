
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footerList } from "@/lib/utils";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { Apple, Facebook, LinkedinIcon, Lollipop, LucideLinkedin, StarIcon, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white py-20 w-full px-5 md:px-72">
      <div className="flex flex-col md:flex-row w-full justify-between ">
        <div className="flex items-star flex-col  space-y-5 ">
          <div className=" flex flex-row gap-3">
            <Image
              src={"/momento-logos/logo.png"}
              alt={"Logo"}
              width={30}
              height={20}
            />{" "}
            <span className="text-2xl font-bold">Momento</span>{" "}
          </div>
          <span>
            <p className="font-medium text-xl">Customer Service</p>
            <p className="font-light tracking-wider mt-1 ">
              7/7 support by chart, phone or email
            </p>
          </span>
          <div>
            <span className="flex flex-row gap-1 text-xl">
              {[1, 2, 3, 4, 5].map((e, index) => (
                <StarIcon
                  key={index}
                  fill="#FFA500"
                  size={20}
                  strokeWidth={0}
                />
              ))}
              <p>4.9</p>
            </span>
            <span className="tracking-wider">REVIEW FROM TRUSTPILOT</span>
          </div>
        </div>

        <div className="md:flex grid grid-cols-2 md:flex-row gap-4 md:justify-evenly md:w-[900px] md:ml-20 mt-4">
          {footerList?.map((footer, index) => (
            <div key={index}>
              <strong className="text-xl">{footer.category}</strong>
              <div className="flex flex-col font-light text-lg space-y-5 pt-6">
                {footer.items.map((e, index) => (
                  <span key={index}>{e}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between  md:items-end mt-16">
        <div className="space-y-4">
          <p>Follow our latest news</p>
          <InputWithButton />
        </div>
        <div className="flex flex-row justify-between md:justify-start gap-4 mt-6 ">
          <Button className="flex items-center text-lg gap-2 bg-lime-200">
            <Lollipop className="h-4 w-4 " />
            Android
          </Button>
          <Button className="flex items-center text-lg gap-2 bg-lime-200">
            <Apple className="h-4 w-4 " />
            IOS
          </Button>
        </div>
      </div>
        <div className="h-[1px] w-full bg-gray-400 my-8 "></div>
      <div className="flex flex-row justify-between text-lg">
          <p>Momento Ltd @2024. All Rights Reserved</p>
          <span className="flex flex-row items-start md:items-center gap-3">
            <Facebook />
            <LucideLinkedin />
            <Twitter />
          </span>
      </div>
    </div>
  );
};

export default Footer;

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2 border-2 p-1 rounded-xl">
      <Input type="email" placeholder="Email" className="border-none w-64"  />
      <Button type="submit">
        Subscribe
      </Button>
    </div>
  );
}
