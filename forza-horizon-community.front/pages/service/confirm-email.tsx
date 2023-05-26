import { AuthAccessLevel } from "@/components";
import { ConfirmEmailContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Anonymouse),
    },
  };
};

const ConfirmEmail = () => {
  return (
    <>
      <Head>
        <title>Email Confirmation | Pocket Forza Horizon Community</title>
        <meta name="description" content="Email Confirmation" />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <ConfirmEmailContent />;
    </>
  );
};

export default ConfirmEmail;
