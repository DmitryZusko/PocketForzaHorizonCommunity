import { AuthAccessLevel } from "@/components";
import { PersonalStatisticsContent } from "@/page-content";
import { gateHandler } from "@/utilities";

const PersonalStatistics = () => {
  return <PersonalStatisticsContent />;
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized),
    },
  };
};

export default PersonalStatistics;
