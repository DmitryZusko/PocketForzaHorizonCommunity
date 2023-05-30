import { AuthAccessLevel } from "@/components";
import { TuneListContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

const TuneList = () => {
  return (
    <>
      <Head>
        <title>Tunes | Pocket Forza Horizon Community</title>
        <meta
          name="description"
          content="Explore various tunes for in-game cars, made by our professional community"
        />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <TuneListContent />
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

export default TuneList;
