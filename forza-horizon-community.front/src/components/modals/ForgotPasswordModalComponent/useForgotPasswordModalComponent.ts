import {
  forgotPasswordSelector,
  setIsForgotPasswordOpen,
  useAppDispatch,
  useAppSelector,
} from "@/redux";

export const useForgotPasswordModalComponent = () => {
  const { isForgotPasswordOpen } = useAppSelector(forgotPasswordSelector);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setIsForgotPasswordOpen(false));
  };
  return { isForgotPasswordOpen, handleClose };
};
