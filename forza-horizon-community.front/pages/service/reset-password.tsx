import { AuthAccessLevel } from "@/components";
import { ResetPasswordContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

const ResetPassword = () => {
  return (
    <>
      <Head>
        <title>Reset Password | Pocket Forza Horizon Community</title>
        <meta name="description" content="Reset Password" />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <ResetPasswordContent />;
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Unauthorized),
    },
  };
};

export default ResetPassword;
