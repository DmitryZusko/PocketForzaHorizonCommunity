import toast from "react-hot-toast";

const showError = (message?: string) => {
  toast.error(message || "Oops, something goes wrong");
};

const showSuccess = (message?: string) => {
  toast.success(message || "Operation is successful");
};

const showToast = { showError, showSuccess };

export default showToast;
