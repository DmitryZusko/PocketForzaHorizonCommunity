import { AddCarFormComponent } from "@/components/forms";
import { FloatingModal } from "../FloatingModal";
import { useAddCarModalComponent } from "./useAddCarModalComponent";

const AddCarModalComponent = () => {
  const { isAddCarOpen, handleClose } = useAddCarModalComponent();
  return (
    <FloatingModal open={isAddCarOpen} handleClose={handleClose}>
      <AddCarFormComponent />
    </FloatingModal>
  );
};

export default AddCarModalComponent;
