import { AccessRole, AuthAccessLevel } from "@/components";
import { AddNewsDesignContent } from "@/page-content";
import { gateHandler } from "@/utilities";

const AddNewsDesign = () => {
  return <AddNewsDesignContent />;
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
