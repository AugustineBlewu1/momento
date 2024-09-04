import { footerList } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white py-20 w-full">
      <div className="flex flex-row w-full justify-between px-72">
        <div className="flex items-star flex-col ">
          <div className=" flex flex-row space-y-6">
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
            <p className="font-light text-lg ">7/7 support by chart, phone or email</p>
          </span>
          <span className="flex flex-row gap-3">
            {[1, 2, 3, 4, 5].map((e, index) => (
              <StarIcon key={index} fill="true" />
            ))}
          </span>
          <span className="tracking-wider">REVIEW FROM TRUSTPILOT</span>
        </div>

        <div className="flex flex-row justify-evenly w-[1000px]">
          {footerList?.map((footer, index) => (
            <div key={index} >
              <strong className="text-xl">{footer.category}</strong>
              <div className="flex flex-col font-light text-lg space-y-7 pt-6">
              {
                footer.items.map((e, index) => (
                  <span  key={index}>
                  {e}
                  </span>
                ))
              }
            </div>
            </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
