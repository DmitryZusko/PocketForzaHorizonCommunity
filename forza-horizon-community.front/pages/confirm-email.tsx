import { AuthAccessLevel } from "@/components";
import { ConfirmEmailContent } from "@/page-content";
import { gateHandler } from "@/utilities";

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Anonymouse),
    },
  };
};

const ConfirmEmail = () => {
  return <ConfirmEmailContent />;
};

export default ConfirmEmail;
