import { SignUpFormComponent } from "@/components/forms";
import { FloatingModal } from "../FloatingModal";
import { useSignUpModalComponent } from "./useSignUpModalComponent";

const SignUpModalComponent = () => {
  const { isSignUpOpen, handleClose } = useSignUpModalComponent();
  return (
    <FloatingModal open={isSignUpOpen} handleClose={handleClose}>
      <SignUpFormComponent />
    </FloatingModal>
  );
};

export default SignUpModalComponent;
