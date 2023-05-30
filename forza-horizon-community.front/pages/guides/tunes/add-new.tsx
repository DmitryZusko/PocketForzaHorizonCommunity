import { AccessRole, AuthAccessLevel } from "@/components";
import { AddNewTuneContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

const AddNewPage = () => {
  return (
    <>
      <Head>
        <title>Add New Tune | Pocket Forza Horizon Community</title>
        <meta name="description" content="Add new tune" />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <AddNewTuneContent />
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized, [
        AccessRole.admin,
        AccessRole.creator,
      ]),
    },
  };
};

export default AddNewPage;
