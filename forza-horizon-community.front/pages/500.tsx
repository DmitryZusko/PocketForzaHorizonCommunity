import { AuthAccessLevel } from "@/components";
import { InternalServerErrorContent } from "@/page-content";
import { gateHandler } from "@/utilities";

const InternalServerError = () => {
  return <InternalServerErrorContent />;
};

export const getStaticProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Anonymouse),
    },
  };
};

export default InternalServerError;
