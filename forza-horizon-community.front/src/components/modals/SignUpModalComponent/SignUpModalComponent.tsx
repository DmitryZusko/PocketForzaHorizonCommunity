import { SignUpFormComponent } from "@/components/forms";
import { ModalProps } from "@mui/material";
import { FloatingModal } from "../FloatingModal";
import { useSignUpModalComponent } from "./useSignUpModalComponent";

const SignUpModalComponent = (props?: ModalProps) => {
  const { isSignUpOpen, handleClose } = useSignUpModalComponent();
  return (
    <FloatingModal open={isSignUpOpen} handleClose={handleClose} {...props}>
      <SignUpFormComponent />
    </FloatingModal>
  );
};

export default SignUpModalComponent;
