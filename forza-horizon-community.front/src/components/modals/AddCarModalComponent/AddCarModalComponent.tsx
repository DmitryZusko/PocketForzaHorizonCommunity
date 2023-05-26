import { AddCarFormComponent } from "@/components/forms";
import { ModalProps } from "@mui/material";
import { FloatingModal } from "../FloatingModal";
import { useAddCarModalComponent } from "./useAddCarModalComponent";

const AddCarModalComponent = (props?: ModalProps) => {
  const { isAddCarOpen, handleClose } = useAddCarModalComponent();
  return (
    <FloatingModal open={isAddCarOpen} handleClose={handleClose} {...props}>
      <AddCarFormComponent />
    </FloatingModal>
  );
};

export default AddCarModalComponent;
