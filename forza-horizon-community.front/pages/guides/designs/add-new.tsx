import { AccessRole, AuthAccessLevel } from "@/components";
import { AddNewsDesignContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

const AddNewsDesign = () => {
  return (
    <>
      <Head>
        <title>Add New Design | Pocket Forza Horizon Community</title>
        <meta name="description" content="Add new design" />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <AddNewsDesignContent />
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

export default AddNewsDesign;
