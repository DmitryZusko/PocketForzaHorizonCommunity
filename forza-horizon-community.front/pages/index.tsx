import { AuthAccessLevel } from "@/components";
import { HomeContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <HomeContent />
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Anonymouse, []),
    },
  };
};

export default Home;
