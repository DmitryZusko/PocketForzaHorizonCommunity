import { AccessRole, AuthAccessLevel } from "@/components";
import { AdminPanelContent } from "@/page-content";
import { gateHandler } from "@/utilities";
import Head from "next/head";

const AdminPanel = () => {
  return (
    <>
      <Head>
        <title>Admin Panel | Pocket Forza Horizon Community</title>
        <meta name="description" content="Admin Panel" />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <AdminPanelContent />
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized, [AccessRole.admin]),
    },
  };
};

export default AdminPanel;
