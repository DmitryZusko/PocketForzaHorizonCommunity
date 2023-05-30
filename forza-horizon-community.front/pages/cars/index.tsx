import { AuthAccessLevel } from "@/components";
import { CarTableContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

const CarTable = () => {
  return (
    <>
      <Head>
        <title>Cars | Pocket Forza Horizon Community</title>
        <meta name="description" content="Explore all cars available in Forza Horizon 5" />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <CarTableContent />
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized),
    },
  };
};

export default CarTable;
