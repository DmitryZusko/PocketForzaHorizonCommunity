import { AddCarTypeFormComponent } from "@/components/forms";
import { ModalProps } from "@mui/material";
import { FloatingModal } from "../FloatingModal";
import { useAddCarTypeModalComponent } from "./useAddCarTypeModalComponent";

const AddCarTypeModalComponent = (props?: ModalProps) => {
  const { isAddCarTypeOpen, handleClose } = useAddCarTypeModalComponent();
  return (
    <FloatingModal open={isAddCarTypeOpen} handleClose={handleClose} {...props}>
      <AddCarTypeFormComponent />
    </FloatingModal>
  );
};

export default AddCarTypeModalComponent;
