import { AuthAccessLevel } from "@/components";
import { DesignListContent } from "@/page-content";
import { gateHandler } from "@/utilities";

const DesignList = () => {
  return <DesignListContent />;
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized, []),
    },
  };
};

export default DesignList;
