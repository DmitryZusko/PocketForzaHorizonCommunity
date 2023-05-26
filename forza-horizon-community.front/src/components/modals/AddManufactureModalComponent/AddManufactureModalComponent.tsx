import { AddManufactureFormComponent } from "@/components";
import { ModalProps } from "@mui/material";
import { FloatingModal } from "../FloatingModal";
import { useAddManufactureModalComponent } from "./useAddManufactureModalComponent";

const AddManufactureModalComponent = (props?: ModalProps) => {
  const { isAddManufactureOpen, handleClose } = useAddManufactureModalComponent();
  return (
    <FloatingModal open={isAddManufactureOpen} handleClose={handleClose} {...props}>
      <AddManufactureFormComponent />
    </FloatingModal>
  );
};

export default AddManufactureModalComponent;
