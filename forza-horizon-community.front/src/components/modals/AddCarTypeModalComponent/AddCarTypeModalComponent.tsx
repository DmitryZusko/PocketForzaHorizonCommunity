import { AddCarTypeFormComponent } from "@/components/forms";
import { FloatingModal } from "../FloatingModal";
import { useAddCarTypeModalComponent } from "./useAddCarTypeModalComponent";

const AddCarTypeModalComponent = () => {
  const { isAddCarTypeOpen, handleClose } = useAddCarTypeModalComponent();
  return (
    <FloatingModal open={isAddCarTypeOpen} handleClose={handleClose}>
      <AddCarTypeFormComponent />
    </FloatingModal>
  );
};

export default AddCarTypeModalComponent;
