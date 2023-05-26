import { EnterEmailFormComponent } from "@/components/forms";
import { ModalProps } from "@mui/base";
import { FloatingModal } from "../FloatingModal";
import { useForgotPasswordModalComponent } from "./useForgotPasswordModalComponent";

const ForgotPasswordModalComponent = (props?: ModalProps) => {
  const { isForgotPasswordOpen, handleClose } = useForgotPasswordModalComponent();
  return (
    <FloatingModal open={isForgotPasswordOpen} handleClose={handleClose} {...props}>
      <EnterEmailFormComponent />
    </FloatingModal>
  );
};

export default ForgotPasswordModalComponent;
