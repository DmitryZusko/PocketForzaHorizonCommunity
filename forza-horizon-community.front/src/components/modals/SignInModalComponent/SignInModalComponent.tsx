import { SingInFormComponent } from "@/components/forms";
import { FloatingModal } from "../FloatingModal";
import { useSignInModalComponent } from "./useSignInModalComponent";

const SignInModalComponent = () => {
  const { isSignInOpen, handleClose } = useSignInModalComponent();
  return (
    <FloatingModal open={isSignInOpen} handleClose={handleClose}>
      <SingInFormComponent />
    </FloatingModal>
  );
};

export default SignInModalComponent;
