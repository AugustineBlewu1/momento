import Image from "next/image";
import MainPage from "./(components)/MainPage";
import Partners from "./(components)/Partners";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
         <MainPage />
         <Partners />
    </main>
  );
}
