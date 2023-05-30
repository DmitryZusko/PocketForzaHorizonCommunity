import { AuthAccessLevel } from "@/components";
import { InternalServerErrorContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

const InternalServerError = () => {
  return (
    <>
      <Head>
        <title>500 | Pocket Forza Horizon Community</title>
        <meta name="description" content="500 Error" />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <InternalServerErrorContent />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Anonymouse),
    },
  };
};

export default InternalServerError;
