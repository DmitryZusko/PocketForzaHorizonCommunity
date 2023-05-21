import { AuthAccessLevel } from "@/components";
import { CarTableContent } from "@/page-content";
import { gateHandler } from "@/utilities";

const CarTable = () => {
  return <CarTableContent />;
};

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized),
    },
  };
};

export default CarTable;
