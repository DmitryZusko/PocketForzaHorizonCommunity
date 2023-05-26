import { AccessRole, AuthAccessLevel } from "@/components";
import { AdminPanelContent } from "@/page-content";
import { gateHandler } from "@/utilities";

const AdminPanel = () => {
  return <AdminPanelContent />;
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized, [AccessRole.admin]),
    },
  };
};

export default AdminPanel;
