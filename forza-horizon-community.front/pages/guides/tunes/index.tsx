import { AuthAccessLevel } from "@/components";
import { TuneListContent } from "@/page-content";
import { gateHandler } from "@/utilities";

const TuneList = () => {
  return <TuneListContent />;
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized),
    },
  };
};

export default TuneList;
