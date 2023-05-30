import { AddManufactureFormComponent } from "@/components";
import { FloatingModal } from "../FloatingModal";
import { useAddManufactureModalComponent } from "./useAddManufactureModalComponent";

const AddManufactureModalComponent = () => {
  const { isAddManufactureOpen, handleClose } = useAddManufactureModalComponent();
  return (
    <FloatingModal open={isAddManufactureOpen} handleClose={handleClose}>
      <AddManufactureFormComponent />
    </FloatingModal>
  );
};

export default AddManufactureModalComponent;
