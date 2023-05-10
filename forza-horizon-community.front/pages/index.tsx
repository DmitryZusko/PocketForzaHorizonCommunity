import { HomeContent } from "@/page-content";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomeContent />
    </>
  );
}
