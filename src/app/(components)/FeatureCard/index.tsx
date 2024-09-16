"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import clsx from "clsx";
import Image from "next/image";

type Pros = {
  imagePath: string;
  title: string;
  subTitle: string;
  description: string;
  isBlack: boolean;
};

const FeatureCard = (props: Pros) => {
  return (
    <Card
      className={clsx(
        " p-0",
        props?.isBlack ? "bg-secondaryDark w-[300px] md:w-[400px]" : " bg-white  w-[350px] md:w-[480px]"
      )}
    >

      <CardHeader>
        <div>
          <Image
            src={`/momento-logos/${props.imagePath}`}
            alt=""
            width={props?.isBlack ? 380 : 450}
            height={170}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p
          className={clsx(
            "uppercase text-xs",
            props?.isBlack ? "text-lime-200" : "text-black"
          )}
        >
          {props.title}
        </p>
        <p
          className={clsx(
            "text-2xl",
            props?.isBlack ? "text-white" : "text-black"
          )}
        >
          {props.subTitle}
        </p>
        <p
          className={clsx(
            "font-light text-lg w-auto",
            props?.isBlack ? "text-gray-100" : "text-black"
          )}
        >
          {props.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
