import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

const SignupPage = () => {
  return (
    <div className="py-20 w-full bg-primaryDark justify-center items-center relative mt-16">
        <div className="absolute">
            <Image  src={"/momento-logos/Layer 17.png"} height={100} width={150} alt="Side Logo"/>
        </div>
      <h2 className="font-medium text-4xl text-center text-white tracking-wider">
        Sign up in minutes. Join the movement
      </h2>
      <p className="text-center text-slate-200 font-light text-lg mt-6">
        Momento goal is to protect what most precious to entrepreneurs; their
        time, energy and focus. <br />
        We are creating the future of business banking and finance, and we'd
        love you to join
      </p>
      <div className="flex flex-row gap-10 justify-center mt-8">
        <Button className="hover:bg-lime-200 hover:text-primary">
          Open an account
          <ArrowUpRightIcon className="h-6 w-6" />
        </Button>

        <Button className="" variant={"outline"}>
          Book a demo
        </Button>
      </div>
    </div>
  );
};

export default SignupPage;
