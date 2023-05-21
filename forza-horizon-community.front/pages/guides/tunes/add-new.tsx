import { AccessRole, AuthAccessLevel } from "@/components";
import { AddNewTuneContent } from "@/page-content";
import { gateHandler } from "@/utilities";

const AddNewPage = () => {
  return <AddNewTuneContent />;
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
