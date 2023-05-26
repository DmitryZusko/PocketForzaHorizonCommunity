import { SingInFormComponent } from "@/components/forms";
import { ModalProps } from "@mui/material";
import { FloatingModal } from "../FloatingModal";
import { useSignInModalComponent } from "./useSignInModalComponent";

const SignInModalComponent = (props?: ModalProps) => {
  const { isSignInOpen, handleClose } = useSignInModalComponent();
  return (
    <FloatingModal open={isSignInOpen} handleClose={handleClose} {...props}>
      <SingInFormComponent />
    </FloatingModal>
  );
};

export default SignInModalComponent;
