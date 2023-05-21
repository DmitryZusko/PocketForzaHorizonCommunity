import { AuthAccessLevel } from "@/components";
import { GuidesPageContent } from "@/page-content";
import { gateHandler } from "@/utilities";

const GuidesPage = () => {
  return <GuidesPageContent />;
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized, []),
    },
  };
};

export default GuidesPage;
