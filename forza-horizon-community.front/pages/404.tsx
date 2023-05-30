import { AuthAccessLevel } from "@/components";
import { PageNotFoundContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Pocket Forza Horizon Community</title>
        <meta name="description" content="404 Error" />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <PageNotFoundContent />
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

export default PageNotFound;
