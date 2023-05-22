import { AuthAccessLevel } from "@/components";
import { ResetPasswordContent } from "@/page-content";
import { gateHandler } from "@/utilities";

const ResetPassword = () => {
  return <ResetPasswordContent />;
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Unauthorized),
    },
  };
};

export default ResetPassword;
