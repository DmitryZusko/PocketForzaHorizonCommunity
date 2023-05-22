import { EnterEmailFormComponent } from "@/components/forms";
import { FloatingModal } from "../FloatingModal";
import { useForgotPasswordModalComponent } from "./useForgotPasswordModalComponent";

const ForgotPasswordModalComponent = () => {
  const { isForgotPasswordOpen, handleClose } = useForgotPasswordModalComponent();
  return (
    <FloatingModal open={isForgotPasswordOpen} handleClose={handleClose}>
      <EnterEmailFormComponent />
    </FloatingModal>
  );
};

export default ForgotPasswordModalComponent;
