import { AuthAccessLevel } from "@/components";
import { PageNotFoundContent } from "@/page-content";
import { gateHandler } from "@/utilities";

const PageNotFound = () => {
  return <PageNotFoundContent />;
};

export const getStaticProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Anonymouse),
    },
  };
};

export default PageNotFound;
