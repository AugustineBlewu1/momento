import FeatureCard from "../FeatureCard";
import TabsPage from "../TabsPage";

const FeaturesPage = () => {


  



    
  return (
    <div className="flex justify-center items-center pt-20 flex-col ">
      <span className="uppercase bg-lime-200 px-4 py-3 rounded-xl">
        Features
      </span>
      <h2 className="font-normal text-5xl tracking-wide pt-4">
        All your finance modules in one app
      </h2>
      <h2 className="text-center font-light text-xl tracking-wide pt-8">
        We have a range of price plans to match your needs <br></br> so you can
        start small and scale up
      </h2>

      <div className="bg-white px-3  rounded-2xl mt-12 ">
        <TabsPage />
      </div>

      <div  className="grid grid-cols-2 gap-6  pt-20">
        <FeatureCard
          imagePath="Layer 10.png"
          title="Payments"
          subTitle="Business IBAN Account"
          description="The all-in-one account you can open in 10 minutes.
Unlimited tansaction history Invoicing"
          isBlack={false}
        />
        <FeatureCard
          imagePath="Layer 13.png"
          title="Swift Payments"
          subTitle="Wire Money in 18 currencies"
          description="Send and receive transfers inside the SEPA Zone and beyond via SWIFT"
          isBlack={true}
        />
      </div>
      <div  className="flex flex-row flex-start pt-10 gap-x-5 mr-16">
     
        <FeatureCard
          imagePath="Layer 12.png"
          title="Swift Payments"
          subTitle="Wire Money in 18 currencies"
          description="Send and receive transfers inside the SEPA Zone and beyond via SWIFT"
          isBlack={true}
        />
           <FeatureCard
          imagePath="Layer 11.png"
          title="Payments"
          subTitle="Business IBAN Account"
          description="The all-in-one account you can open in 10 minutes.
Unlimited tansaction history Invoicing"
          isBlack={false}
        />
      </div>
    </div>
  );
};

export default FeaturesPage;
