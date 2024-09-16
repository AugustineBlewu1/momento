import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { ArrowUpRightIcon } from "lucide-react";
import YoutubeComponent from "../YoutubeComponent";

const CasePage = () => {
  return (
    <div className="bg-white w-full px-5 md:px-72">
      <div className="pt-20">
        <span className="uppercase bg-lime-200 px-4 py-3 rounded-xl">
          Case Studies
        </span>

        <div className="flex flex-col md:flex-row justify-between pt-10 items-start md:items-end space-y-4 md:space-y-0">
          <span className="text-3xl font-light">
            Loved by industry leaders <br></br> See what customers are saying.
          </span>
          <Button className="flex items-center">
            Customer stories
            <ArrowUpRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between pb-20 ">
          <YoutubeComponent
            title="Time"
            videoId="F9sJbhJBj4Y"
            description="For a freelancer, traditional banks are really archaic. I know exactly how much I pay for every service I need"
            founder={{ name: "Juilia Stefaine", company: "Zendesk" }}
            service="Services"
          ></YoutubeComponent>
          <YoutubeComponent
            title="Time"
            videoId="7FomMiKEeEo"
            description="Excellent service! We were able to deposit the share capital online, and the
customer service was really helpful"
            founder={{ name: "Brandon Marron", company: "Starbust" }}
            service="Saas"
          ></YoutubeComponent>
        </div>
      </div>
    </div>
  );
};

export default CasePage;
