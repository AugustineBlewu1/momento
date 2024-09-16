"use client"

import MainPage from "./(components)/MainPage";
import Partners from "./(components)/Partners";
import CasePage from "./(components)/CasePage";
import Features from "./(components)/Features";
import CustomPage from "./(components)/CustomPage";
import FAQsPage from "./(components)/FAQsPage";
import SignupPage from "./(components)/SignupPage";
import Footer from "./(components)/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const container = useRef(null)

  const isInView = useInView(ref, { root: container });

  const style={
     transform: isInView ? "none" : "translateY",
    opacity: isInView ? 0 : 1,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    
  };
  return (
    <main className="flex min-h-screen flex-col  " ref={container}>
         <MainPage  {...style}/>
         <Partners  />
         <CasePage />
         <Features />
         <CustomPage/>
         <FAQsPage />
         <SignupPage />
         <Footer />
    </main>
  );
}
