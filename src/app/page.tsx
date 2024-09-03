import Image from "next/image";
import MainPage from "./(components)/MainPage";
import Partners from "./(components)/Partners";
import CasePage from "./(components)/CasePage";
import Features from "./(components)/Features";
import CustomPage from "./(components)/CustomPage";
import FAQsPage from "./(components)/FAQsPage";
import SignupPage from "./(components)/SignupPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
         <MainPage />
         <Partners />
         <CasePage />
         <Features />
         <CustomPage/>
         <FAQsPage />
         <SignupPage />
    </main>
  );
}
