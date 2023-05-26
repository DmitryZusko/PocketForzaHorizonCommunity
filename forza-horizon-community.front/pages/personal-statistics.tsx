import { AuthAccessLevel } from "@/components";
import { PersonalStatisticsContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

const PersonalStatistics = () => {
  return (
    <>
      <Head>
        <title>Personal Statistics | Pocket Forza Horizon Community</title>
        <meta
          name="description"
          content="In-game statistics with milestones, records and best moments!"
        />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <PersonalStatisticsContent />;
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

export default PersonalStatistics;
