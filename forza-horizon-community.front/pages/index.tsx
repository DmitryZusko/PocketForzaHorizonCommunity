import { AuthAccessLevel } from "@/components";
import { HomeContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        <title>Pocket Forza Horizon Community</title>
        <meta
          name="description"
          content="Pocket Forza Horizon 5 welcomes you! Here you can explore all available in-game cars, 
        share your records milestones and discover new tunes and liveries for your favourite cars! Join our community and bring your part in Forxa Horizon Family."
        />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <HomeContent />
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Anonymouse),
    },
  };
};

export default Home;
