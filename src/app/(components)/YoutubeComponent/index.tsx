"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import YouTube from 'react-youtube';
type Props = {
  videoId: string;
  title: string;
  description: string;
  founder : {
    name: string;
    company: string;
  },
  service : string
};

const YoutubeComponent = (props: Props) => {
  const opts = {
    height: "250",
    width: "420",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Card className="w-[23.5rem] md:w-[33.5rem] text-center items-center">
      <CardHeader>
        <div className="relative">
        <YouTube videoId={props.videoId} opts={opts} className="aspect-ratio" iframeClassName={"rounded-2xl w-full h-auto"}/>
        <div className="absolute bottom-0 text-white w-full">
          <div className="flex flex-row justify-between px-5 text-lg py-3">
          <span>{props.founder.name}</span>
          <span>Founder <span className="h-1 w-1 bg-white rounded-full inline-block"></span>  {props.founder.company}</span>
          </div>
        
        </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-start font-extralight text-lg">{props.description}</p>
      </CardContent>
      <CardFooter>
        <p  className="tracking-wide">Momento for {props.service}</p>
      </CardFooter>
    </Card>
  );
};

export default YoutubeComponent;
