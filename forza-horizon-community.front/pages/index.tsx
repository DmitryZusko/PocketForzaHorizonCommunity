import HomeContent from "@/page-content/home/HomeContent";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomeContent />
    </>
  );
}
