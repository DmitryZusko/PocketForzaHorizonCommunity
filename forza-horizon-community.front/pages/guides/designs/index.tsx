import { AuthAccessLevel } from "@/components";
import { DesignListContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

const DesignList = () => {
  return (
    <>
      <Head>
        <title>Designs | Pocket Forza Horizon Community</title>
        <meta
          name="description"
          content="Explore various designs for in-game cars, made by our creative community"
        />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <DesignListContent />;
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

export default DesignList;
