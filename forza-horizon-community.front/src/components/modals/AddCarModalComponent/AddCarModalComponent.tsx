import { AddCarFormComponent } from "@/components/forms";
import { FloatingModal } from "../FloatingModal";
import { useAddCarModalComponent } from "./useAddCarModalComponent";

const AddCarModalComponent = () => {
  const { isAddCarOpen, handleclose } = useAddCarModalComponent();
  return (
    <FloatingModal open={isAddCarOpen} handleClose={handleclose}>
      <AddCarFormComponent />
    </FloatingModal>
  );
};

export default AddCarModalComponent;
