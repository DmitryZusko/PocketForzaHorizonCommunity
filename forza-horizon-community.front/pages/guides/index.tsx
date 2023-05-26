import { AuthAccessLevel } from "@/components";
import { GuidesPageContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

const GuidesPage = () => {
  return (
    <>
      <Head>
        <title>Guides | Pocket Forza Horizon Community</title>
        <meta
          name="description"
          content="Here you can find the best car tunes and most fabulous liveries created by our community!"
        />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <GuidesPageContent />;
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

export default GuidesPage;
